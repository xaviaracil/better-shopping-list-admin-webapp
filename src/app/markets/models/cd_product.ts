interface FieldValue {
  value: string;
  type: string;
}
interface Fields {
  CD_brand: FieldValue;
  CD_ean: FieldValue;
  CD_entityName: FieldValue;
  CD_imageUrl: FieldValue;
  CD_name: FieldValue;
  CD_tokenizedName: FieldValue;
}
export default interface CD_Product {
  recordName: string;
  recordType: string;
  fields: Fields;
}
