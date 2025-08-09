import {
  Table,
  Column,
  Model,
  DataType,
  Default,
  PrimaryKey,
} from "sequelize-typescript";

@Table({
  tableName: "products",
})

// Define el modelo de producto
class Products extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

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
  availability!: boolean;
}

export default Products;
