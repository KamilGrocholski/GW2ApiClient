export interface ItemStats {
    id: number
    name: string
    attributes: {
        attribute:  
            'AgonyResistance'
            | 'BoonDuration' 
            | 'ConditionDamage' 
            | 'ConditionDuration' 
            | 'CritDamage' 
            | 'Healing' 
            | 'Power' 
            | 'Precision' 
            | 'Toughness' 
            | 'Vitality' 
        multiplier: number
        value: number
    }[]
}

export * from './account'