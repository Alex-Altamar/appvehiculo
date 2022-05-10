import { Model, DataTypes } from 'sequelize';
import { dtabase  } from '../database/db';

export class VehiculoVenta extends Model {
    public nombre!: string;
}

export interface VehiculoVentaI {
    nombre: string;
   
}

VehiculoVenta.init(
    {
        VehiculoId: { 
            type: DataTypes.STRING,
            allowNull: false
        },

        VentaId: { 
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: "vehiculoVentas",
        sequelize: dtabase,
        timestamps: false
    }
)
