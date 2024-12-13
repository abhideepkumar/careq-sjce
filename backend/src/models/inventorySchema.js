import mongoose from 'mongoose';

const inventorySchema = new mongoose.Schema({
  hospital_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hospital',
    required: true
  },
  inventory_item_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'InventoryItem',
    required: true
  },
  stock_quantity: {
    type: Number,
    required: true,
    min: 0
  },
  last_refill_date: {
    type: Date,
    required: true
  },
  expiry_date: {
    type: Date,
    required: true,
    default:null,
  }
}, {
  timestamps: true
});

export default mongoose.model('Inventory', inventorySchema);