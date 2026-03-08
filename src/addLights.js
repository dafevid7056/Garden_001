import * as THREE from 'three'

export function addLights(scene) {
    // Warm directional light — low angle
    const directionalLight = new THREE.DirectionalLight(0xfff5e0, 1.2)
    directionalLight.position.set(5, 8, 3)
    scene.add(directionalLight)

    // Cool, dim ambient light
    const ambientLight = new THREE.AmbientLight(0xe8eaf0, 1)
    scene.add(ambientLight)
}



