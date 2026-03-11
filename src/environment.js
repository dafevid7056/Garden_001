import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
import { EquirectangularReflectionMapping } from 'three'

export function environment(hdrFile = 'Sky.hdr') {
	const rgbeLoader = new RGBELoader()
	const hdrMap = rgbeLoader.load(hdrFile, (envMap) => {
		envMap.mapping = EquirectangularReflectionMapping
		return envMap
	})
	return hdrMap
}