export interface IInfoCard{
    img?: string,
    title:string,
    desc: string,
    isAboutCard: boolean,
    withButton: boolean,
    buttonText?: string,
}

export interface IAboutCard{
    title:string,
    desc:string,
    bgChar: string
}