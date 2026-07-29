import pool from "../config/database";

export const getAllFruits = async () => {
    const result = await pool.query(
        "SELECT * FROM fruits ORDER BY id"
    );

    return result.rows;
};

export const getFruitById = async (id: string) => {
    const result = await pool.query(
        "SELECT * FROM fruits WHERE id=$1",
        [id]
    );

    return result.rows[0];
};

export const createFruit = async (
    name: string,
    color: string,
    addedBy: number
) => {

    const result = await pool.query(
        `INSERT INTO fruits(name,color,"addedBy")
         VALUES($1,$2,$3)
         RETURNING *`,
        [name, color, addedBy]
    );

    return result.rows[0];
};

export const updateFruit = async (
    id: string,
    name: string,
    color: string,
    addedBy: number
) => {

    const result = await pool.query(
        `UPDATE fruits
         SET name=$1,
             color=$2,
             "addedBy"=$3
         WHERE id=$4
         RETURNING *`,
        [name, color, addedBy, id]
    );

    return result.rows[0];
};

export const deleteFruit = async (id: string) => {

    const result = await pool.query(
        "DELETE FROM fruits WHERE id=$1 RETURNING *",
        [id]
    );

    return result.rowCount! > 0;
};