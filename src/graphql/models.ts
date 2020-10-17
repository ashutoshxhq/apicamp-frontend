import { gql } from '@apollo/client';

export const GET_FIELDS = gql`
  query getFields(
    $id: uuid!
    $model_id: uuid
  ) {
    fields(order_by: {updated_at: desc} where: {id: {_eq: $id} model_id: {_eq: $model_id} deleted: {_neq: true}}) {
        id
        name
        type
        default
        null_value
        model_id
    }
}`;

export const GET_MODELS = gql`
  query getModels(
    $id: uuid
    $service_id: uuid
  ) {
    models(order_by: {updated_at: desc} where: {id: {_eq: $id} service_id: {_eq: $service_id} deleted: {_neq: true}}) {
        id
        name
        fields{
            id
            name
            type
            default
            key
            null_value
        }
        service_id
    }
}`;

export const GET_RELATIONSHIPS = gql`
  query getRelationships(
    $id: uuid
    $model_id: uuid
  ) {
    relationships(order_by: {updated_at: desc} where: {id: {_eq: $id} model_id: {_eq: $model_id} deleted: {_neq: true}}) {
      id
      type
      name
      updated_at
      created_at
      relationshipModel {
        id
        name
      }
      relationshipModelField {
        id
        name
      }
      model {
        id
        name
      }
      modelField {
        id
        name
      }
    }
}`;

export const CREATE_FIELD = gql`
  mutation createFieldMutation(
    $name: String!
    $model_id: uuid!
    $default: String!
    $key: String!
    $null_value: String!
    $type: String!
  ) {
    insert_fields_one(object: {name: $name model_id: $model_id type: $type key: $key null_value:$null_value default: $default }){
      id
      name
      type
      key
      null_value
      default
      model_id
  }
}`;

export const CREATE_MODEL = gql`
  mutation createModelMutation(
    $name: String!
    $service_id: uuid
  ) {
    insert_models_one(object: {name: $name service_id: $service_id}){
      id
      name
      service_id
  }
}`;

export const UPDATE_MODEL = gql`
  mutation updateModelMutation(
    $name: String!
    $id: uuid!
  ) {
    update_models(where: {id: {_eq: $id}}, _set: {name: $name}){
      affected_rows
  }
}`;

export const UPDATE_FIELD = gql`
  mutation updateFieldMutation(
    $name: String!
    $id: uuid!
    $default: String!
    $key: String!
    $null_value: String!
    $type: String!
  ) {
    update_fields(where: {id: {_eq: $id}}, _set: {name: $name type: $type key: $key null_value:$null_value default: $default }){
      affected_rows
  }
}`;

export const DELETE_MODEL = gql`
  mutation deleteModelMutation(
    $id: uuid!
  ) {
    delete_models(where: {id: {_eq: $id}}) {
      affected_rows
  }
    delete_fields(where: {model_id: {_eq: $id}}) {
      affected_rows
  }
}`;

export const DELETE_FIELD = gql`
  mutation deleteFieldMutation(
    $id: uuid!
  ) {
    delete_fields(where: {id: {_eq: $id}}) {
      affected_rows
  }
}`;