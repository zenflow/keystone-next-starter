import * as extensions from "../extensions";
import {
  TypeData,
  FieldsType,
  FieldsTypeArg,
  ScalarType,
  EnumType
} from "gqless";

type Extension<TName extends string> = TName extends keyof typeof extensions
  ? typeof extensions[TName]
  : any;

/**
 * @name Query
 * @type OBJECT
 */
type t_Query = FieldsType<
  {
    __typename: t_String<"Query">;

    /**
     *  Search for all User items which match the where clause.
     */
    allUsers?: FieldsTypeArg<
      {
        where?: UserWhereInput | null;
        search?: string | null;
        orderBy?: string | null;
        first?: number | null;
        skip?: number | null;
      },
      (t_User | null)[] | null
    >;

    /**
     *  Search for the User item with the matching ID.
     */
    User?: FieldsTypeArg<{ where: UserWhereUniqueInput }, t_User | null>;

    /**
     *  Perform a meta-query on all User items which match the where clause.
     */
    _allUsersMeta?: FieldsTypeArg<
      {
        where?: UserWhereInput | null;
        search?: string | null;
        orderBy?: string | null;
        first?: number | null;
        skip?: number | null;
      },
      t__QueryMeta | null
    >;

    /**
     *  Retrieve the meta-data for the User list.
     */
    _UsersMeta?: t__ListMeta | null;

    /**
     *  Retrieve the meta-data for all lists.
     */
    _ksListsMeta?: (t__ListMeta | null)[] | null;

    /**
     * The version of the Keystone application serving this API.
     */
    appVersion?: t_String | null;
    authenticatedUser?: t_User | null;
  },
  Extension<"Query">
>;

/**
 * @name UserWhereInput
 * @type INPUT_OBJECT
 */
export type UserWhereInput = {
  AND?: (UserWhereInput | null)[] | null;
  OR?: (UserWhereInput | null)[] | null;
  id?: string | null;
  id_not?: string | null;
  id_in?: (string | null)[] | null;
  id_not_in?: (string | null)[] | null;
  email?: string | null;
  email_not?: string | null;
  email_contains?: string | null;
  email_not_contains?: string | null;
  email_starts_with?: string | null;
  email_not_starts_with?: string | null;
  email_ends_with?: string | null;
  email_not_ends_with?: string | null;
  email_i?: string | null;
  email_not_i?: string | null;
  email_contains_i?: string | null;
  email_not_contains_i?: string | null;
  email_starts_with_i?: string | null;
  email_not_starts_with_i?: string | null;
  email_ends_with_i?: string | null;
  email_not_ends_with_i?: string | null;
  email_in?: (string | null)[] | null;
  email_not_in?: (string | null)[] | null;
  password_is_set?: boolean | null;
  isAdmin?: boolean | null;
  isAdmin_not?: boolean | null;
  bio?: string | null;
  bio_not?: string | null;
  bio_contains?: string | null;
  bio_not_contains?: string | null;
  bio_starts_with?: string | null;
  bio_not_starts_with?: string | null;
  bio_ends_with?: string | null;
  bio_not_ends_with?: string | null;
  bio_i?: string | null;
  bio_not_i?: string | null;
  bio_contains_i?: string | null;
  bio_not_contains_i?: string | null;
  bio_starts_with_i?: string | null;
  bio_not_starts_with_i?: string | null;
  bio_ends_with_i?: string | null;
  bio_not_ends_with_i?: string | null;
  bio_in?: (string | null)[] | null;
  bio_not_in?: (string | null)[] | null;
  updatedAt?: any | null;
  updatedAt_not?: any | null;
  updatedAt_lt?: any | null;
  updatedAt_lte?: any | null;
  updatedAt_gt?: any | null;
  updatedAt_gte?: any | null;
  updatedAt_in?: (any | null)[] | null;
  updatedAt_not_in?: (any | null)[] | null;
  createdAt?: any | null;
  createdAt_not?: any | null;
  createdAt_lt?: any | null;
  createdAt_lte?: any | null;
  createdAt_gt?: any | null;
  createdAt_gte?: any | null;
  createdAt_in?: (any | null)[] | null;
  createdAt_not_in?: (any | null)[] | null;
  updatedBy?: UserWhereInput | null;
  updatedBy_is_null?: boolean | null;
  createdBy?: UserWhereInput | null;
  createdBy_is_null?: boolean | null;
};

/**
 * @name ID
 * @type SCALAR
 */
type t_ID<T extends string = string> = ScalarType<T, Extension<"ID">>;

/**
 * @name String
 * @type SCALAR
 */
type t_String<T extends string = string> = ScalarType<T, Extension<"String">>;

/**
 * @name Boolean
 * @type SCALAR
 */
type t_Boolean<T extends boolean = boolean> = ScalarType<
  T,
  Extension<"Boolean">
>;

/**
 * @name DateTime
 * @type SCALAR
 */
type t_DateTime<T extends any = any> = ScalarType<T, Extension<"DateTime">>;

/**
 * @name Int
 * @type SCALAR
 */
type t_Int<T extends number = number> = ScalarType<T, Extension<"Int">>;

/**
 * @name User
 * @type OBJECT
 */
type t_User = FieldsType<
  {
    __typename: t_String<"User">;

    /**
     * This virtual field will be resolved in one of the following ways (in this order):
     *  1. Execution of 'labelResolver' set on the User List config, or
     *  2. As an alias to the field set on 'labelField' in the User List config, or
     *  3. As an alias to a 'name' field on the User List (if one exists), or
     *  4. As an alias to the 'id' field on the User List.
     */
    _label_?: t_String | null;
    id?: t_ID | null;
    email?: t_String | null;
    password_is_set?: t_Boolean | null;
    isAdmin?: t_Boolean | null;
    bio?: t_String | null;
    updatedAt?: t_DateTime | null;
    createdAt?: t_DateTime | null;
    updatedBy?: t_User | null;
    createdBy?: t_User | null;
  },
  Extension<"User">
>;

/**
 * @name UserWhereUniqueInput
 * @type INPUT_OBJECT
 */
export type UserWhereUniqueInput = { id: string };

/**
 * @name _QueryMeta
 * @type OBJECT
 */
type t__QueryMeta = FieldsType<
  {
    __typename: t_String<"_QueryMeta">;
    count?: t_Int | null;
  },
  Extension<"_QueryMeta">
>;

/**
 * @name _ListMeta
 * @type OBJECT
 */
type t__ListMeta = FieldsType<
  {
    __typename: t_String<"_ListMeta">;

    /**
     * The Keystone List name
     */
    name?: t_String | null;

    /**
     * Access control configuration for the currently authenticated
     * request
     */
    access?: t__ListAccess | null;

    /**
     * Information on the generated GraphQL schema
     */
    schema?: t__ListSchema | null;
  },
  Extension<"_ListMeta">
>;

/**
 * @name _ListAccess
 * @type OBJECT
 */
type t__ListAccess = FieldsType<
  {
    __typename: t_String<"_ListAccess">;

    /**
     * Access Control settings for the currently logged in (or anonymous)
     * user when performing 'create' operations.
     * NOTE: 'create' can only return a Boolean.
     * It is not possible to specify a declarative Where clause for this
     * operation
     */
    create?: t_Boolean | null;

    /**
     * Access Control settings for the currently logged in (or anonymous)
     * user when performing 'read' operations.
     */
    read?: t_JSON | null;

    /**
     * Access Control settings for the currently logged in (or anonymous)
     * user when performing 'update' operations.
     */
    update?: t_JSON | null;

    /**
     * Access Control settings for the currently logged in (or anonymous)
     * user when performing 'delete' operations.
     */
    delete?: t_JSON | null;

    /**
     * Access Control settings for the currently logged in (or anonymous)
     * user when performing 'auth' operations.
     */
    auth?: t_JSON | null;
  },
  Extension<"_ListAccess">
>;

/**
 * @name JSON
 * @type SCALAR
 */
type t_JSON<T extends { [K: string]: any } = { [K: string]: any }> = ScalarType<
  T,
  Extension<"JSON">
>;

/**
 * @name _ListSchema
 * @type OBJECT
 */
type t__ListSchema = FieldsType<
  {
    __typename: t_String<"_ListSchema">;

    /**
     * The typename as used in GraphQL queries
     */
    type?: t_String | null;

    /**
     * Top level GraphQL query names which either return this type, or
     * provide aggregate information about this type
     */
    queries?: (t_String | null)[] | null;

    /**
     * Information about fields on other types which return this type, or
     * provide aggregate information about this type
     */
    relatedFields?: (t__ListSchemaRelatedFields | null)[] | null;
  },
  Extension<"_ListSchema">
>;

/**
 * @name _ListSchemaRelatedFields
 * @type OBJECT
 */
type t__ListSchemaRelatedFields = FieldsType<
  {
    __typename: t_String<"_ListSchemaRelatedFields">;

    /**
     * The typename as used in GraphQL queries
     */
    type?: t_String | null;

    /**
     * A list of GraphQL field names
     */
    fields?: (t_String | null)[] | null;
  },
  Extension<"_ListSchemaRelatedFields">
>;

/**
 * @name Mutation
 * @type OBJECT
 */
type t_Mutation = FieldsType<
  {
    __typename: t_String<"Mutation">;

    /**
     *  Create a single User item.
     */
    createUser?: FieldsTypeArg<
      { data?: UserCreateInput | null },
      t_User | null
    >;

    /**
     *  Create multiple User items.
     */
    createUsers?: FieldsTypeArg<
      { data?: (UsersCreateInput | null)[] | null },
      (t_User | null)[] | null
    >;

    /**
     *  Update a single User item by ID.
     */
    updateUser?: FieldsTypeArg<
      { id: string; data?: UserUpdateInput | null },
      t_User | null
    >;

    /**
     *  Update multiple User items by ID.
     */
    updateUsers?: FieldsTypeArg<
      { data?: (UsersUpdateInput | null)[] | null },
      (t_User | null)[] | null
    >;

    /**
     *  Delete a single User item by ID.
     */
    deleteUser?: FieldsTypeArg<{ id: string }, t_User | null>;

    /**
     *  Delete multiple User items by ID.
     */
    deleteUsers?: FieldsTypeArg<
      { ids?: string[] | null },
      (t_User | null)[] | null
    >;

    /**
     *  Authenticate and generate a token for a User with the Password Authentication Strategy.
     */
    authenticateUserWithPassword?: FieldsTypeArg<
      { email?: string | null; password?: string | null },
      t_authenticateUserOutput | null
    >;
    unauthenticateUser?: t_unauthenticateUserOutput | null;
  },
  Extension<"Mutation">
>;

/**
 * @name UserCreateInput
 * @type INPUT_OBJECT
 */
export type UserCreateInput = {
  email?: string | null;
  password?: string | null;
  isAdmin?: boolean | null;
  bio?: string | null;
};

/**
 * @name UsersCreateInput
 * @type INPUT_OBJECT
 */
export type UsersCreateInput = { data?: UserCreateInput | null };

/**
 * @name UserUpdateInput
 * @type INPUT_OBJECT
 */
export type UserUpdateInput = {
  password?: string | null;
  isAdmin?: boolean | null;
  bio?: string | null;
};

/**
 * @name UsersUpdateInput
 * @type INPUT_OBJECT
 */
export type UsersUpdateInput = { id: string; data?: UserUpdateInput | null };

/**
 * @name authenticateUserOutput
 * @type OBJECT
 */
type t_authenticateUserOutput = FieldsType<
  {
    __typename: t_String<"authenticateUserOutput">;

    /**
     *  Used to make subsequent authenticated requests by setting this token in a header: 'Authorization: Bearer <token>'.
     */
    token?: t_String | null;

    /**
     *  Retrieve information on the newly authenticated User here.
     */
    item?: t_User | null;
  },
  Extension<"authenticateUserOutput">
>;

/**
 * @name unauthenticateUserOutput
 * @type OBJECT
 */
type t_unauthenticateUserOutput = FieldsType<
  {
    __typename: t_String<"unauthenticateUserOutput">;

    /**
     * `true` when unauthentication succeeds.
     * NOTE: unauthentication always succeeds when the request has an invalid or missing authentication token.
     */
    success?: t_Boolean | null;
  },
  Extension<"unauthenticateUserOutput">
>;

/**
 * @name __Schema
 * @type OBJECT
 */
type t___Schema = FieldsType<
  {
    __typename: t_String<"__Schema">;

    /**
     * A list of all types supported by this server.
     */
    types: t___Type[];

    /**
     * The type that query operations will be rooted at.
     */
    queryType: t___Type;

    /**
     * If this server supports mutation, the type that mutation operations will be rooted at.
     */
    mutationType?: t___Type | null;

    /**
     * If this server support subscription, the type that subscription operations will be rooted at.
     */
    subscriptionType?: t___Type | null;

    /**
     * A list of all directives supported by this server.
     */
    directives: t___Directive[];
  },
  Extension<"__Schema">
>;

/**
 * @name __Type
 * @type OBJECT
 */
type t___Type = FieldsType<
  {
    __typename: t_String<"__Type">;
    kind: t___TypeKind;
    name?: t_String | null;
    description?: t_String | null;
    fields?: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      t___Field[] | null
    >;
    interfaces?: t___Type[] | null;
    possibleTypes?: t___Type[] | null;
    enumValues?: FieldsTypeArg<
      { includeDeprecated?: boolean | null },
      t___EnumValue[] | null
    >;
    inputFields?: t___InputValue[] | null;
    ofType?: t___Type | null;
  },
  Extension<"__Type">
>;

/**
 * @name __TypeKind
 * @type ENUM
 */
type t___TypeKind = EnumType<
  | "SCALAR"
  | "OBJECT"
  | "INTERFACE"
  | "UNION"
  | "ENUM"
  | "INPUT_OBJECT"
  | "LIST"
  | "NON_NULL"
>;

/**
 * @name __Field
 * @type OBJECT
 */
type t___Field = FieldsType<
  {
    __typename: t_String<"__Field">;
    name: t_String;
    description?: t_String | null;
    args: t___InputValue[];
    type: t___Type;
    isDeprecated: t_Boolean;
    deprecationReason?: t_String | null;
  },
  Extension<"__Field">
>;

/**
 * @name __InputValue
 * @type OBJECT
 */
type t___InputValue = FieldsType<
  {
    __typename: t_String<"__InputValue">;
    name: t_String;
    description?: t_String | null;
    type: t___Type;

    /**
     * A GraphQL-formatted string representing the default value for this input value.
     */
    defaultValue?: t_String | null;
  },
  Extension<"__InputValue">
>;

/**
 * @name __EnumValue
 * @type OBJECT
 */
type t___EnumValue = FieldsType<
  {
    __typename: t_String<"__EnumValue">;
    name: t_String;
    description?: t_String | null;
    isDeprecated: t_Boolean;
    deprecationReason?: t_String | null;
  },
  Extension<"__EnumValue">
>;

/**
 * @name __Directive
 * @type OBJECT
 */
type t___Directive = FieldsType<
  {
    __typename: t_String<"__Directive">;
    name: t_String;
    description?: t_String | null;
    locations: t___DirectiveLocation[];
    args: t___InputValue[];
  },
  Extension<"__Directive">
>;

/**
 * @name __DirectiveLocation
 * @type ENUM
 */
type t___DirectiveLocation = EnumType<
  | "QUERY"
  | "MUTATION"
  | "SUBSCRIPTION"
  | "FIELD"
  | "FRAGMENT_DEFINITION"
  | "FRAGMENT_SPREAD"
  | "INLINE_FRAGMENT"
  | "VARIABLE_DEFINITION"
  | "SCHEMA"
  | "SCALAR"
  | "OBJECT"
  | "FIELD_DEFINITION"
  | "ARGUMENT_DEFINITION"
  | "INTERFACE"
  | "UNION"
  | "ENUM"
  | "ENUM_VALUE"
  | "INPUT_OBJECT"
  | "INPUT_FIELD_DEFINITION"
>;

/**
 * @name UserRelateToOneInput
 * @type INPUT_OBJECT
 */
export type UserRelateToOneInput = {
  create?: UserCreateInput | null;
  connect?: UserWhereUniqueInput | null;
  disconnect?: UserWhereUniqueInput | null;
  disconnectAll?: boolean | null;
};

/**
 * @name CacheControlScope
 * @type ENUM
 */
type t_CacheControlScope = EnumType<"PUBLIC" | "PRIVATE">;

/**
 * @name Upload
 * @type SCALAR
 */
type t_Upload<T extends any = any> = ScalarType<T, Extension<"Upload">>;

/**
 * @name Query
 * @type OBJECT
 */
export type Query = TypeData<t_Query>;

/**
 * @name ID
 * @type SCALAR
 */
export type ID = TypeData<t_ID>;

/**
 * @name String
 * @type SCALAR
 */
export type String = TypeData<t_String>;

/**
 * @name Boolean
 * @type SCALAR
 */
export type Boolean = TypeData<t_Boolean>;

/**
 * @name DateTime
 * @type SCALAR
 */
export type DateTime = TypeData<t_DateTime>;

/**
 * @name Int
 * @type SCALAR
 */
export type Int = TypeData<t_Int>;

/**
 * @name User
 * @type OBJECT
 */
export type User = TypeData<t_User>;

/**
 * @name _QueryMeta
 * @type OBJECT
 */
export type _QueryMeta = TypeData<t__QueryMeta>;

/**
 * @name _ListMeta
 * @type OBJECT
 */
export type _ListMeta = TypeData<t__ListMeta>;

/**
 * @name _ListAccess
 * @type OBJECT
 */
export type _ListAccess = TypeData<t__ListAccess>;

/**
 * @name JSON
 * @type SCALAR
 */
export type JSON = TypeData<t_JSON>;

/**
 * @name _ListSchema
 * @type OBJECT
 */
export type _ListSchema = TypeData<t__ListSchema>;

/**
 * @name _ListSchemaRelatedFields
 * @type OBJECT
 */
export type _ListSchemaRelatedFields = TypeData<t__ListSchemaRelatedFields>;

/**
 * @name Mutation
 * @type OBJECT
 */
export type Mutation = TypeData<t_Mutation>;

/**
 * @name authenticateUserOutput
 * @type OBJECT
 */
export type authenticateUserOutput = TypeData<t_authenticateUserOutput>;

/**
 * @name unauthenticateUserOutput
 * @type OBJECT
 */
export type unauthenticateUserOutput = TypeData<t_unauthenticateUserOutput>;

/**
 * @name __Schema
 * @type OBJECT
 */
export type __Schema = TypeData<t___Schema>;

/**
 * @name __Type
 * @type OBJECT
 */
export type __Type = TypeData<t___Type>;

/**
 * @name __TypeKind
 * @type ENUM
 */
export enum __TypeKind {
  SCALAR = "SCALAR",
  OBJECT = "OBJECT",
  INTERFACE = "INTERFACE",
  UNION = "UNION",
  ENUM = "ENUM",
  INPUT_OBJECT = "INPUT_OBJECT",
  LIST = "LIST",
  NON_NULL = "NON_NULL"
}

/**
 * @name __Field
 * @type OBJECT
 */
export type __Field = TypeData<t___Field>;

/**
 * @name __InputValue
 * @type OBJECT
 */
export type __InputValue = TypeData<t___InputValue>;

/**
 * @name __EnumValue
 * @type OBJECT
 */
export type __EnumValue = TypeData<t___EnumValue>;

/**
 * @name __Directive
 * @type OBJECT
 */
export type __Directive = TypeData<t___Directive>;

/**
 * @name __DirectiveLocation
 * @type ENUM
 */
export enum __DirectiveLocation {
  QUERY = "QUERY",
  MUTATION = "MUTATION",
  SUBSCRIPTION = "SUBSCRIPTION",
  FIELD = "FIELD",
  FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION",
  FRAGMENT_SPREAD = "FRAGMENT_SPREAD",
  INLINE_FRAGMENT = "INLINE_FRAGMENT",
  VARIABLE_DEFINITION = "VARIABLE_DEFINITION",
  SCHEMA = "SCHEMA",
  SCALAR = "SCALAR",
  OBJECT = "OBJECT",
  FIELD_DEFINITION = "FIELD_DEFINITION",
  ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION",
  INTERFACE = "INTERFACE",
  UNION = "UNION",
  ENUM = "ENUM",
  ENUM_VALUE = "ENUM_VALUE",
  INPUT_OBJECT = "INPUT_OBJECT",
  INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION"
}

/**
 * @name CacheControlScope
 * @type ENUM
 */
export enum CacheControlScope {
  PUBLIC = "PUBLIC",
  PRIVATE = "PRIVATE"
}

/**
 * @name Upload
 * @type SCALAR
 */
export type Upload = TypeData<t_Upload>;
