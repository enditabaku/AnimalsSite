export interface GalleryUrlObjectTypes {
	type: 'dogs' | 'cats' | 'birds'
	page?: number
	page_size?: number
}

export interface OptionType {
	value: string,
	label: string
}