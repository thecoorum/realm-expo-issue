import { Realm } from "@realm/react";

export default class Category extends Realm.Object {
  static schema = {
    name: "Category",
    properties: {
      id: "int",
      name: "string",
      type: "string",
      icon: "string",
      translations: "string[]",
      createdAt: "date",
      updatedAt: "date?",
    },
  };

  static create({ id, name, type, icon, translations }) {
    return {
      id,
      name,
      type,
      icon,
      translations,
      createdAt: new Date(),
    };
  }
}
