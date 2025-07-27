import { Table, Column, Model, DataType, Default } from "sequelize-typescript";

@Table({
  tableName: "products",
})

// Define el modelo de producto
class Products extends Model {
  @Column({
    type: DataType.STRING(100),
  })
  name!: string;

  @Column({
    type: DataType.FLOAT(6, 2),
  })
  price!: number;

  @Default(true)
  @Column({
    type: DataType.BOOLEAN,
  })
  avalability!: boolean;
}

export default Products;
