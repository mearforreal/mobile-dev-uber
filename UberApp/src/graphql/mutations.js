/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      email
      rating
      orders {
        items {
          id
          type
          originLatitude
          oreiginLongitude
          destLatitude
          destLongitude
          status
          userId
          carId
          createdAt
          updatedAt
        }
        nextToken
      }
      car {
        id
        type
        latitude
        longitude
        heading
        isActive
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          rating
          createdAt
          updatedAt
          userCarId
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userCarId
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      email
      rating
      orders {
        items {
          id
          type
          originLatitude
          oreiginLongitude
          destLatitude
          destLongitude
          status
          userId
          carId
          createdAt
          updatedAt
        }
        nextToken
      }
      car {
        id
        type
        latitude
        longitude
        heading
        isActive
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          rating
          createdAt
          updatedAt
          userCarId
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userCarId
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      email
      rating
      orders {
        items {
          id
          type
          originLatitude
          oreiginLongitude
          destLatitude
          destLongitude
          status
          userId
          carId
          createdAt
          updatedAt
        }
        nextToken
      }
      car {
        id
        type
        latitude
        longitude
        heading
        isActive
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          rating
          createdAt
          updatedAt
          userCarId
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userCarId
    }
  }
`;
export const createCar = /* GraphQL */ `
  mutation CreateCar(
    $input: CreateCarInput!
    $condition: ModelCarConditionInput
  ) {
    createCar(input: $input, condition: $condition) {
      id
      type
      latitude
      longitude
      heading
      isActive
      orders {
        items {
          id
          type
          originLatitude
          oreiginLongitude
          destLatitude
          destLongitude
          status
          userId
          carId
          createdAt
          updatedAt
        }
        nextToken
      }
      userId
      user {
        id
        username
        email
        rating
        orders {
          nextToken
        }
        car {
          id
          type
          latitude
          longitude
          heading
          isActive
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userCarId
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCar = /* GraphQL */ `
  mutation UpdateCar(
    $input: UpdateCarInput!
    $condition: ModelCarConditionInput
  ) {
    updateCar(input: $input, condition: $condition) {
      id
      type
      latitude
      longitude
      heading
      isActive
      orders {
        items {
          id
          type
          originLatitude
          oreiginLongitude
          destLatitude
          destLongitude
          status
          userId
          carId
          createdAt
          updatedAt
        }
        nextToken
      }
      userId
      user {
        id
        username
        email
        rating
        orders {
          nextToken
        }
        car {
          id
          type
          latitude
          longitude
          heading
          isActive
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userCarId
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCar = /* GraphQL */ `
  mutation DeleteCar(
    $input: DeleteCarInput!
    $condition: ModelCarConditionInput
  ) {
    deleteCar(input: $input, condition: $condition) {
      id
      type
      latitude
      longitude
      heading
      isActive
      orders {
        items {
          id
          type
          originLatitude
          oreiginLongitude
          destLatitude
          destLongitude
          status
          userId
          carId
          createdAt
          updatedAt
        }
        nextToken
      }
      userId
      user {
        id
        username
        email
        rating
        orders {
          nextToken
        }
        car {
          id
          type
          latitude
          longitude
          heading
          isActive
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userCarId
      }
      createdAt
      updatedAt
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      type
      originLatitude
      oreiginLongitude
      destLatitude
      destLongitude
      status
      userId
      user {
        id
        username
        email
        rating
        orders {
          nextToken
        }
        car {
          id
          type
          latitude
          longitude
          heading
          isActive
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userCarId
      }
      carId
      car {
        id
        type
        latitude
        longitude
        heading
        isActive
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          rating
          createdAt
          updatedAt
          userCarId
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      type
      originLatitude
      oreiginLongitude
      destLatitude
      destLongitude
      status
      userId
      user {
        id
        username
        email
        rating
        orders {
          nextToken
        }
        car {
          id
          type
          latitude
          longitude
          heading
          isActive
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userCarId
      }
      carId
      car {
        id
        type
        latitude
        longitude
        heading
        isActive
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          rating
          createdAt
          updatedAt
          userCarId
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      type
      originLatitude
      oreiginLongitude
      destLatitude
      destLongitude
      status
      userId
      user {
        id
        username
        email
        rating
        orders {
          nextToken
        }
        car {
          id
          type
          latitude
          longitude
          heading
          isActive
          userId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userCarId
      }
      carId
      car {
        id
        type
        latitude
        longitude
        heading
        isActive
        orders {
          nextToken
        }
        userId
        user {
          id
          username
          email
          rating
          createdAt
          updatedAt
          userCarId
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
