import mongoose from 'mongoose';

const inventoryItemSchema = new mongoose.Schema({
  hospital_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hospital',
    required: true
  },
  category: {
    type: String,
    enum: ['MEDICINE', 'EQUIPMENT', 'SUPPLIES'],
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model('InventoryItem', inventoryItemSchema);