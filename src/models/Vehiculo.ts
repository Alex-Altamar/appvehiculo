import { Model, DataTypes } from 'sequelize';
import { validateLocaleAndSetLanguage } from 'typescript';
import { dtabase  } from '../database/db';
import { Marca } from './Marca';
import { VehiculoVenta } from './VehiculoVenta';

export class Vehiculo extends Model {
    public modelo!: string;
    public color!: string;
    public placa!: string;
    public moto!: string;

}

export interface UsuarioI {
    modelo: string;
    color: string;
    placa: string;
    motor: string;
}

Vehiculo.init(
    {
        modelo: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        color: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        placa: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        motor: { 
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    
    {
        tableName: "vehiculoss",
        sequelize: dtabase,
        timestamps: false
    }
)

Marca.hasMany(Vehiculo);
Vehiculo.belongsTo(Marca);

//Tipovehiculo.hasMany(Vehiculo);
//Vehiculo.belongsTo(Tipovehiculo);

//Venta.belongsToMany(Vehiculo, {through: VehiculoVenta})


    