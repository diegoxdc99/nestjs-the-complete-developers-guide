export interface Messages {
  findOne(id: string);
  findAll();
  create(message: string);
}
