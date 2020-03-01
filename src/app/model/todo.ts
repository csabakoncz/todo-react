/*
 here we must have something that makes this module recognized as an ES6 module by SystemJS
https://github.com/systemjs/systemjs/blob/0.21.6/src/instantiate.js#L417
Typescript interface and enum are not in the regex
*/
export const _ = 'SystemJS-bug' //do not remove this line

export interface Todo{
    id: string
    text: string
    completed: boolean
    blinks?: boolean
}
 export class TodoImpl implements Todo{
     id = ''+Math.random()
     text: string
     completed: boolean
     blinks?: boolean
     constructor(text: string, completed?: boolean){
         this.text = text
         this.completed = completed
     }
 }