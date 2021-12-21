/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onOrderUpdated = /* GraphQL */ `
  subscription OnOrderUpdated($id: ID!) {
    onOrderUpdated(id: $id) {
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
export const onCarUpdated = /* GraphQL */ `
  subscription OnCarUpdated($id: ID!) {
    onCarUpdated(id: $id) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateCar = /* GraphQL */ `
  subscription OnCreateCar {
    onCreateCar {
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
export const onUpdateCar = /* GraphQL */ `
  subscription OnUpdateCar {
    onUpdateCar {
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
export const onDeleteCar = /* GraphQL */ `
  subscription OnDeleteCar {
    onDeleteCar {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
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
