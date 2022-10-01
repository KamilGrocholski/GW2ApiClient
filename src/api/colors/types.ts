export type ColorsIds = number[]

export type Color = {
    id: number
    name: string
    base_rgb: number[] | null
    cloth: {
        brightness: number
        contrast: number
        hue: number
        saturation: number
        lightness: number
        rgb: [number, number, number]
    }
    leather: {
        brightness: number
        contrast: number
        hue: number
        saturation: number
        lightness: number
        rgb: [number, number, number]
    }
    metal: {
        brightness: number
        contrast: number
        hue: number
        saturation: number
        lightness: number
        rgb: [number, number, number]
    }
    fur?: {
        brightness: number
        contrast: number
        hue: number
        saturation: number
        lightness: number
        rgb: [number, number, number]
    }
    item?: number
    categories: (
        'Gray' 
        | 'Brown' 
        | 'Red' 
        | 'Orange' 
        | 'Yellow' 
        | 'Green' 
        | 'Blue' 
        | 'Purple' 
        | 'Vibrant' 
        | 'Leather' 
        | 'Metal' 
        | 'Starter' 
        | 'Common' 
        | 'Uncommon' 
        | 'Rare' 
        | 'Exclusive'
    )[]
}

export type Colors = Color[]