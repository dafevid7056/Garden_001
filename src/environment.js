import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
import { EquirectangularReflectionMapping } from 'three'

export function environment() {
	const rgbeLoader = new RGBELoader()
	const hdrMap = rgbeLoader.load('Sky.hdr', (envMap) => {
		envMap.mapping = EquirectangularReflectionMapping
		return envMap
	})
	return hdrMap
}