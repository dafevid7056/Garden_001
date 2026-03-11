import * as THREE from 'three'

export function addLights(scene, mode = 'day') {
    const lights = []

    if (mode === 'night') {
        // directional night light
        const moonlight = new THREE.DirectionalLight(0xafc2ff, 0.5)
        moonlight.position.set(5, 10, 5)
        moonlight.castShadow = true
        moonlight.shadow.mapSize.width = 1024
        moonlight.shadow.mapSize.height = 1024
        lights.push(moonlight)

        // night ambient light
        const ambientLight = new THREE.AmbientLight(0x0c0c1e, 0.4)
        lights.push(ambientLight)

        // lamp glow
        const lampLight = new THREE.PointLight(0xffaa00, 2, 10)
        lampLight.position.set(-0.5, 0.75, -2)
        lights.push(lampLight)
    } else {
        // warm directional light — low angle
        const directionalLight = new THREE.DirectionalLight(0xfff5e0, 1.2)
        directionalLight.position.set(5, 8, 3)
        lights.push(directionalLight)

        // dim ambient light
        const ambientLight = new THREE.AmbientLight(0xe8eaf0, 1)
        lights.push(ambientLight)
    }

    lights.forEach((light) => scene.add(light))
    return lights
}



