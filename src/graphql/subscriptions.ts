/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGenre = /* GraphQL */ `
  subscription OnCreateGenre($owner: String!) {
    onCreateGenre(owner: $owner) {
      id
      name
      colorCode
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateGenre = /* GraphQL */ `
  subscription OnUpdateGenre($owner: String!) {
    onUpdateGenre(owner: $owner) {
      id
      name
      colorCode
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteGenre = /* GraphQL */ `
  subscription OnDeleteGenre($owner: String!) {
    onDeleteGenre(owner: $owner) {
      id
      name
      colorCode
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($owner: String!) {
    onCreateTodo(owner: $owner) {
      id
      name
      tags {
        name
        colorCode
      }
      description
      completed
      genreID
      genre {
        id
        name
        colorCode
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($owner: String!) {
    onUpdateTodo(owner: $owner) {
      id
      name
      tags {
        name
        colorCode
      }
      description
      completed
      genreID
      genre {
        id
        name
        colorCode
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($owner: String!) {
    onDeleteTodo(owner: $owner) {
      id
      name
      tags {
        name
        colorCode
      }
      description
      completed
      genreID
      genre {
        id
        name
        colorCode
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
