import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export type UserID = string;

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn("uuid")
  id: UserID;

  @Column({ nullable: false })
  name: string;
}
