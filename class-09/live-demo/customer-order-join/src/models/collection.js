'use strict';

class Collection {
  constructor(model) {
    this.model = model;
  }

  async create(json) {
    try {
      const record = await this.model.create(json);
      return record;
    } catch (e) {
      console.error('error in the create collection interface');
      return e;
    }
  }

  async read(id = null) {
    try {
      if (!id) {
        // get all
        const records = await this.model.findAll();
        return records;
      } else {
        // get by id
        const singleRecord = await this.model.findByPk(id);
        return singleRecord;
      }
    } catch (e) {
      console.error('error in the read collection interface');
      return e;
    }
  }

  async readManyToOne(id, model) {
    try {
      let record = await this.model.findByPk(id, {
        include: model,
      });
      return record;
    } catch (e){
      console.error('error in the read collection interface');
      return e;
    }
  }

  async update(json, id) {
    try {
      const updatedRecord = await this.model.update(json, { where: { id } });
      return updatedRecord;
    } catch (e) {
      console.error('error in the update collection interface');
      return e;
    }
  }

  async delete(id) {
    try {
      await this.model.destroy({ where: { id } });
      return 'record deleted';
    } catch (e) {
      console.error('error in the delete collection interface');
      return e;
    }
  }
}

module.exports = Collection;
