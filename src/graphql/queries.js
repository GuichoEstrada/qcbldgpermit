/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
      id
      applicationNo
      orNo
      orDate
      orAmount
      postflag
      createdAt
      receiptNo
      billNo
      billDate
      taxpayerName
      taxpayerAddress
      controlCode
      incomeClass
      fund
      fundGrp
      fundSubGrp
      incomeGrp
      incomeSubGrp
      description
      incomeObject
      incomeTitle
      accountCode
      officeAccountCode
      blgfCode
      incomeDescription
      incomeSubDescription
      rate
      formType
      reference
      updatedAt
    }
  }
`;
export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        applicationNo
        orNo
        orDate
        orAmount
        postflag
        createdAt
        receiptNo
        billNo
        billDate
        taxpayerName
        taxpayerAddress
        controlCode
        incomeClass
        fund
        fundGrp
        fundSubGrp
        incomeGrp
        incomeSubGrp
        description
        incomeObject
        incomeTitle
        accountCode
        officeAccountCode
        blgfCode
        incomeDescription
        incomeSubDescription
        rate
        formType
        reference
        updatedAt
      }
      nextToken
    }
  }
`;
