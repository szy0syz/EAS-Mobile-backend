'use strict'

import mongoose from 'mongoose'

const idsSchema = new mongoose.Schema({
  userId: Number,
  imgId: Number,
});

const Ids = mongoose.model('Ids', idsSchema);

Ids.findOne((err, data) => {
  if (!data) {
    const newIds = new Ids({
      userId: 0,
      imgId: 0,
    });
    newIds.save();
  }
})

export default Ids