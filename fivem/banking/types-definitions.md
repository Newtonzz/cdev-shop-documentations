---
description: >-
  This page provides detailed descriptions of all custom data types used in the
  accounts system documentation. Each type is explained with its fields and
  associated data structures.
---

# Types Definitions

### Account

Represents a user account in the system with financial and membership information.

**Fields:**

* owner: `string` - The name or identifier of the account owner.
* members: `string[]` - A list of member identifiers linked to the account.
* id: `number` - A unique identifier for the account.
* balance: `number` - The current monetary balance in the account.
* skin: `number` - An identifier for customizing the appearance of the account interface.
* isPersonal: `boolean` - Indicates if the account is for personal use.
* roles: [`role[]`](types-definitions.md#role) - A list of roles associated with the account, detailing permissions and access rights.

### Role

Defines access controls and permissions for users associated with an account.

**Fields:**

* identifier: `string` - A unique identifier, typically a citizen ID, for the role.
* permissions: [`permissions`](types-definitions.md#permissions) - A set of permissions detailing allowed actions within the account.

### Permissions

Details specific actions a role is allowed to perform in the account management system.

**Fields:**

* DepositMoney: `boolean` - Permission to deposit money into the account.
* SeeStatements: `boolean` - Permission to view account statements.
* TransferMoney: `boolean` - Permission to transfer money to other accounts.
* SeeLoans: `boolean` - Permission to view loan information.
* SeeInvoices: `boolean` - Permission to view invoices.
* WithdrawMoney: `boolean` - Permission to withdraw money from the account.

### Transaction

Describes a financial transaction associated with an account.

**Fields:**

* amount: `number` - The amount of money involved in the transaction.
* type: `string` - The type of transaction (e.g., deposit, withdrawal).
* name: `string` - A brief description or reason for the transaction.
* date: `date` - The date on which the transaction took place.
* n: `number` - A transaction number or identifier.
* to?: `number` - Optional. The account identifier for the recipient, if applicable.

## Loan

**Fields:**

* id: number&#x20;
* accountid: number
* paid: number
* amount: number
* time: number
* eventdata: {OnPaid: {event: `string`, args: `table`} OnNotPaid: {event: `string`, args: `table`\}}

## Invoice

**Fields:**

* id: number&#x20;
* accountid: number
* name: string <mark style="color:green;">-- Title</mark>
* description: string <mark style="color:green;">-- Reason</mark>
* amount: number
* time: number
* eventdata: {OnPaid: {event: `string`, args: `table`} OnNotPaid: {event: `string`, args: `table`\}}

