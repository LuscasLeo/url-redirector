import { Column, Entity, PrimaryColumn } from "typeorm";

export type TagID = string;

@Entity("tags")
export default class Tag {
  @PrimaryColumn()
  id: TagID;

  @Column({ nullable: false })
  url: string;
}
