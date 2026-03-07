import * as THREE from 'three'

export const createVideoTexture = (videoId) => {
    //standard grabbing the html element via id, using js to also play the video
    const video = document.getElementById(videoId);
    video.play();
    //create a new video texture using the data from the html video
    const texture = new THREE.VideoTexture(video);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBAFormat;

    return texture;
}