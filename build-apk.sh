#!/bin/bash
# Build script: Deutsch von Null APK
# Needs: JDK17 in ~/jdk17, Android SDK in ~/sdk (build-tools 34, platform android-34)
set -e
export JAVA_HOME=~/jdk17 PATH=~/jdk17/bin:~/sdk/build-tools/34.0.0:$PATH
cd "$(dirname "$0")"
mkdir -p build/gen build/obj
aapt2 compile --dir res -o build/res.zip
aapt2 link -o build/app-unsigned.apk -I ~/sdk/platforms/android-34/android.jar --manifest AndroidManifest.xml -A assets build/res.zip
javac -encoding UTF-8 -source 1.8 -target 1.8 -cp ~/sdk/platforms/android-34/android.jar -d build/obj src/com/deutsch/vonnull/MainActivity.java
d8 --min-api 24 --output build/ build/obj/com/deutsch/vonnull/*.class
cp build/app-unsigned.apk build/app-dex.apk
(cd build && zip -q app-dex.apk classes.dex)
zipalign -f -p 4 build/app-dex.apk build/app-aligned.apk
apksigner sign --ks keystore.jks --ks-pass pass:deutsch123 --key-pass pass:deutsch123 --out build/Deutsch-von-Null-v2.apk build/app-aligned.apk
apksigner verify build/Deutsch-von-Null-v2.apk && echo "BUILD OK: build/Deutsch-von-Null-v2.apk"
