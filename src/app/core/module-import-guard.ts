export function throwIfLoaded(parentModule: any, moduleName: string){
    if (parentModule){
        throw new Error(`${moduleName} has already been loaded. The Core Modules should only be used for the AppModule`)
    }
}
