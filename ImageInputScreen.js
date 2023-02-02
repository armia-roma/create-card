import React, { useState } from 'react'
import Screen from './Screen'
import ImageInput from './src/components/ImageInput'
import ImageList from './src/components/ImageList'
export default function ImageInputScreen() {
	const [imageUri, setImageUri ] = useState()
	const [imageUris, setImageUris ] = useState([])
	const handleAdd = uri => {
		setImageUris([...imageUris, uri])
	}
	const handleRemove = uri => {
		setImageUris(imageUris.filter((imageUri) => imageUri !== uri))
	}
	return (
		<Screen>
			<ImageInput
			imageUri={imageUri}
			onChangeImage={uri => setImageUri(uri)}
			></ImageInput>
			<ImageList
			imageUris={imageUris}
			onAddImage={uri => handleAdd(uri)}
			onRemoveImage={uri => handleRemove(uri)}
			/>
		</Screen>
	)
}
