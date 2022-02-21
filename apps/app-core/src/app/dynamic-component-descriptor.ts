export interface DynamicComponents {
    [index: string]: {
        mode: 'replace' | 'add-before'| 'add-after' | 'remove';
        component?: any
    }
}
