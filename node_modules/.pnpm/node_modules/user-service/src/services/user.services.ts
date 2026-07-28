import db from "../db/database";
import { v4 as uuid } from "uuid";


export const getAllUsers = () => {

    return db
        .prepare("SELECT * FROM users")
        .all();

};


export const getUserById = (id: string) => {

    return db
        .prepare(
            "SELECT * FROM users WHERE id = ?"
        )
        .get(id);

};


export const createUser = (
    name: string,
    email: string
) => {


    const result = db
        .prepare(
            `
            INSERT INTO users(name,email)
            VALUES(?,?)
            `
        )
        .run(
            name,
            email
        );


    return {
        id: result.lastInsertRowid,
        name,
        email
    };

};



export const updateUser = (
    id: string,
    name: string,
    email: string
) => {


    const result = db
        .prepare(
            `
            UPDATE users
            SET name=?, email=?
            WHERE id=?
            `
        )
        .run(
            name,
            email,
            id
        );


    if(result.changes === 0){
        return null;
    }


    return getUserById(id);

};



export const deleteUser = (
    id: string
) => {


    const result = db
        .prepare(
            "DELETE FROM users WHERE id=?"
        )
        .run(id);


    return result.changes > 0;

};