import * as THREE from 'three';

export function addDefaultMeshes() {

    const geometry = new THREE.BoxGeometry(1,1,1)
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
    const mesh = new THREE.Mesh(geometry, material)

    return mesh;
}

export function addStandardMeshes() {
    const geometry = new THREE.BoxGeometry(1,1,1)
    const material = new THREE.MeshStandardMaterial({ 
        color: 0xbbf634 
    })
    const mesh = new THREE.Mesh(geometry, material)
    return mesh;
}