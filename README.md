Sample project for testing SOASTA TouchTest UI Test Automation Tool

Pre-requisites:

NodeJS version 5x  
NPM version 3x  
Cordova (npm install -g cordova)  
Ionic 2 (npm install ionic@beta)  

Commands (root folder)

Run Web: ionic serve  
Run Android device: ionic run android

SOASTA TouchTest configuration files are located in:
resources/android/config

After the first "ionic run android" ionic will populate the platforms/android folder with the Android Project, copy the files in the config file to the root folder of the Android Project to activate the TouchTest Gradle Plugin  
Or manually alter the lines in the build.gradle file:

```
//Add this line
apply plugin: 'com.soasta.touchtest'

buildscript {
    repositories {
        mavenCentral()
        jcenter()
    }
    
    dependencies {
        classpath 'com.android.tools.build:gradle:2.1.0'

        //Add this line
        classpath 'com.soasta.touchtest:touchtest-plugin:1.4.11'
    }
}

//Add the block or the line if it already exists
configurations {
  soasta
}

dependencies {
    compile fileTree(dir: 'libs', include: '*.jar')
    // SUB-PROJECT DEPENDENCIES START
    debugCompile project(path: "CordovaLib", configuration: "debug")
    releaseCompile project(path: "CordovaLib", configuration: "release")
    // SUB-PROJECT DEPENDENCIES END

    //Add this line
    soasta 'com.soasta.touchtest:touchtestdriver:1.4.11'
}
```

Then, on the Android Project Folder (platforms/android) execute the command  
```gradle clean assembleDebug```  
Which will create the android-debug.apk in the build/outputs/apk folder, then install de apk on the device using:  
```adb install build/outputs/apk/android-debug.apk```
