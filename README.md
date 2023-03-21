# manual-image-captioner
This tool is to help those who'd rather manually caption images in batches with ease

* Patreon: https://www.patreon.com/sd_hassan

# Features
* Select large folder of images, thousands at a time are supported
* Uses web local storage so you can resume from a folder you have used before (as long as you don't hit the red reset/refresh button)
* Can wipe your local storage from the app
* all offline
* use **keyboard arrows** right and left to go to next image and previous image quickly, retaining existing captions
* Can directly select any image from the thumbnails or pages to load directly (good for resuming later)
* No need to "save" a caption just move to the next and hit download at the end
* Download option when you are ready and it will rename all captions to match the image filenames, create a local zip for you to place wherever you want (when you have thousands + images and select download, let it run the script to package them all for 10-20 seconds then the download dialog will pop up)

# Screenshot
![image](https://user-images.githubusercontent.com/119671806/213822440-23585e2b-9fcc-4d41-946a-f2299b95669d.png)

# Video demo
[![Quick Video showcase](https://i.ytimg.com/vi/Fz2KFbfg7mM/hqdefault.jpg?sqp=-oaymwE2CPYBEIoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB4AWAAtAFigIMCAAQARhyIFAoRDAP&rs=AOn4CLDUwQlEloxSqdKpElyKLwdTHNRVOQ)](https://youtu.be/Fz2KFbfg7mM)


# Usage
* Download the **prepacked application** from the releases section on the right
* Run the application exe file which is a portable application for Windows only right now.

If you want the NodeJS electron build version, clone the repo,run `npm install` and then `npm run start` to load it from nodeJS directly.

You can fork this repo, make changed and run `npm run build` to build a package deployment.
