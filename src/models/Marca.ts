import { Model, DataTypes } from 'sequelize';
import { dtabase  } from '../database/db';

export class Marca extends Model {
    public nombre!: string;
}

export interface MarcaI {
    nombre: string;
   
}

Marca.init(
    {
        nombre: { 
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: "marcas",
        sequelize: dtabase,
        timestamps: false
    }
)
