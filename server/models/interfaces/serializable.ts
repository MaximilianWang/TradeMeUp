/**
 * Base interface to create classes that will deserialize json. Based upon solution described by https://stackoverflow.com/a/22886730
 */

export interface Serializable<T> {
    deserialize(input: any): T;
}