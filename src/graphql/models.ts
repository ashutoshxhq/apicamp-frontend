import { gql } from '@apollo/client';

export const GET_FIELDS = gql`
  query getFields(
    $id: uuid
    $model_id: uuid
  ) {
    fields(where: {id: {_eq: $id} model_id: {_eq: $model_id} deleted: {_neq: true}}) {
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
    models(where: {id: {_eq: $id} service_id: {_eq: $service_id} deleted: {_neq: true}}) {
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

export const CREATE_FIELD = gql`
  mutation createFieldMutation(
    $name: String!
    $model_id: uuid!
    $default: String!
    $null_value: Boolean!
    $type: String!
  ) {
    insert_fields_one(object: {name: $name model_id: $model_id type: $type null_value:$null_value default: $default }){
      id
      name
      type
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

export const DELETE_MODEL = gql`
  mutation deleteModelMutation(
    $id: uuid!
  ) {
    delete_models(where: {id: {_eq: $id}}) {
      affected_rows
  }
}`;