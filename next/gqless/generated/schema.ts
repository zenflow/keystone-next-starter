// @ts-nocheck
import * as extensions from "../extensions";
import { lazyGetters } from "@gqless/utils";
import {
  ObjectNode,
  FieldNode,
  ArrayNode,
  Arguments,
  ArgumentsField,
  InputNode,
  InputNodeField,
  ScalarNode,
  EnumNode
} from "gqless";

export const schema = {
  get Query() {
    return new ObjectNode(
      {
        get allUsers() {
          return new FieldNode(
            new ArrayNode(schema.User, true),
            new Arguments({
              get where() {
                return new ArgumentsField(schema.UserWhereInput, true);
              },
              get search() {
                return new ArgumentsField(schema.String, true);
              },
              get orderBy() {
                return new ArgumentsField(schema.String, true);
              },
              get first() {
                return new ArgumentsField(schema.Int, true);
              },
              get skip() {
                return new ArgumentsField(schema.Int, true);
              }
            }),
            true
          );
        },
        get User() {
          return new FieldNode(
            schema.User,
            new Arguments(
              {
                get where() {
                  return new ArgumentsField(schema.UserWhereUniqueInput, false);
                }
              },
              true
            ),
            true
          );
        },
        get _allUsersMeta() {
          return new FieldNode(
            schema._QueryMeta,
            new Arguments({
              get where() {
                return new ArgumentsField(schema.UserWhereInput, true);
              },
              get search() {
                return new ArgumentsField(schema.String, true);
              },
              get orderBy() {
                return new ArgumentsField(schema.String, true);
              },
              get first() {
                return new ArgumentsField(schema.Int, true);
              },
              get skip() {
                return new ArgumentsField(schema.Int, true);
              }
            }),
            true
          );
        },
        get _UsersMeta() {
          return new FieldNode(schema._ListMeta, undefined, true);
        },
        get _ksListsMeta() {
          return new FieldNode(
            new ArrayNode(schema._ListMeta, true),
            undefined,
            true
          );
        },
        get appVersion() {
          return new FieldNode(schema.String, undefined, true);
        },
        get authenticatedUser() {
          return new FieldNode(schema.User, undefined, true);
        }
      },
      { name: "Query", extension: ((extensions as any) || {}).Query }
    );
  },
  get UserWhereInput() {
    return new InputNode(
      {
        get AND() {
          return new InputNodeField(
            new ArrayNode(schema.UserWhereInput, true),
            true
          );
        },
        get OR() {
          return new InputNodeField(
            new ArrayNode(schema.UserWhereInput, true),
            true
          );
        },
        get id() {
          return new InputNodeField(schema.ID, true);
        },
        get id_not() {
          return new InputNodeField(schema.ID, true);
        },
        get id_in() {
          return new InputNodeField(new ArrayNode(schema.ID, true), true);
        },
        get id_not_in() {
          return new InputNodeField(new ArrayNode(schema.ID, true), true);
        },
        get email() {
          return new InputNodeField(schema.String, true);
        },
        get email_not() {
          return new InputNodeField(schema.String, true);
        },
        get email_contains() {
          return new InputNodeField(schema.String, true);
        },
        get email_not_contains() {
          return new InputNodeField(schema.String, true);
        },
        get email_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get email_not_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get email_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get email_not_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get email_i() {
          return new InputNodeField(schema.String, true);
        },
        get email_not_i() {
          return new InputNodeField(schema.String, true);
        },
        get email_contains_i() {
          return new InputNodeField(schema.String, true);
        },
        get email_not_contains_i() {
          return new InputNodeField(schema.String, true);
        },
        get email_starts_with_i() {
          return new InputNodeField(schema.String, true);
        },
        get email_not_starts_with_i() {
          return new InputNodeField(schema.String, true);
        },
        get email_ends_with_i() {
          return new InputNodeField(schema.String, true);
        },
        get email_not_ends_with_i() {
          return new InputNodeField(schema.String, true);
        },
        get email_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get email_not_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get password_is_set() {
          return new InputNodeField(schema.Boolean, true);
        },
        get isAdmin() {
          return new InputNodeField(schema.Boolean, true);
        },
        get isAdmin_not() {
          return new InputNodeField(schema.Boolean, true);
        },
        get bio() {
          return new InputNodeField(schema.String, true);
        },
        get bio_not() {
          return new InputNodeField(schema.String, true);
        },
        get bio_contains() {
          return new InputNodeField(schema.String, true);
        },
        get bio_not_contains() {
          return new InputNodeField(schema.String, true);
        },
        get bio_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get bio_not_starts_with() {
          return new InputNodeField(schema.String, true);
        },
        get bio_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get bio_not_ends_with() {
          return new InputNodeField(schema.String, true);
        },
        get bio_i() {
          return new InputNodeField(schema.String, true);
        },
        get bio_not_i() {
          return new InputNodeField(schema.String, true);
        },
        get bio_contains_i() {
          return new InputNodeField(schema.String, true);
        },
        get bio_not_contains_i() {
          return new InputNodeField(schema.String, true);
        },
        get bio_starts_with_i() {
          return new InputNodeField(schema.String, true);
        },
        get bio_not_starts_with_i() {
          return new InputNodeField(schema.String, true);
        },
        get bio_ends_with_i() {
          return new InputNodeField(schema.String, true);
        },
        get bio_not_ends_with_i() {
          return new InputNodeField(schema.String, true);
        },
        get bio_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get bio_not_in() {
          return new InputNodeField(new ArrayNode(schema.String, true), true);
        },
        get updatedAt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get updatedAt_not() {
          return new InputNodeField(schema.DateTime, true);
        },
        get updatedAt_lt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get updatedAt_lte() {
          return new InputNodeField(schema.DateTime, true);
        },
        get updatedAt_gt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get updatedAt_gte() {
          return new InputNodeField(schema.DateTime, true);
        },
        get updatedAt_in() {
          return new InputNodeField(new ArrayNode(schema.DateTime, true), true);
        },
        get updatedAt_not_in() {
          return new InputNodeField(new ArrayNode(schema.DateTime, true), true);
        },
        get createdAt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get createdAt_not() {
          return new InputNodeField(schema.DateTime, true);
        },
        get createdAt_lt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get createdAt_lte() {
          return new InputNodeField(schema.DateTime, true);
        },
        get createdAt_gt() {
          return new InputNodeField(schema.DateTime, true);
        },
        get createdAt_gte() {
          return new InputNodeField(schema.DateTime, true);
        },
        get createdAt_in() {
          return new InputNodeField(new ArrayNode(schema.DateTime, true), true);
        },
        get createdAt_not_in() {
          return new InputNodeField(new ArrayNode(schema.DateTime, true), true);
        },
        get updatedBy() {
          return new InputNodeField(schema.UserWhereInput, true);
        },
        get updatedBy_is_null() {
          return new InputNodeField(schema.Boolean, true);
        },
        get createdBy() {
          return new InputNodeField(schema.UserWhereInput, true);
        },
        get createdBy_is_null() {
          return new InputNodeField(schema.Boolean, true);
        }
      },
      { name: "UserWhereInput" }
    );
  },
  get ID() {
    return new ScalarNode({
      name: "ID",
      extension: ((extensions as any) || {}).ID
    });
  },
  get String() {
    return new ScalarNode({
      name: "String",
      extension: ((extensions as any) || {}).String
    });
  },
  get Boolean() {
    return new ScalarNode({
      name: "Boolean",
      extension: ((extensions as any) || {}).Boolean
    });
  },
  get DateTime() {
    return new ScalarNode({
      name: "DateTime",
      extension: ((extensions as any) || {}).DateTime
    });
  },
  get Int() {
    return new ScalarNode({
      name: "Int",
      extension: ((extensions as any) || {}).Int
    });
  },
  get User() {
    return new ObjectNode(
      {
        get _label_() {
          return new FieldNode(schema.String, undefined, true);
        },
        get id() {
          return new FieldNode(schema.ID, undefined, true);
        },
        get email() {
          return new FieldNode(schema.String, undefined, true);
        },
        get password_is_set() {
          return new FieldNode(schema.Boolean, undefined, true);
        },
        get isAdmin() {
          return new FieldNode(schema.Boolean, undefined, true);
        },
        get bio() {
          return new FieldNode(schema.String, undefined, true);
        },
        get updatedAt() {
          return new FieldNode(schema.DateTime, undefined, true);
        },
        get createdAt() {
          return new FieldNode(schema.DateTime, undefined, true);
        },
        get updatedBy() {
          return new FieldNode(schema.User, undefined, true);
        },
        get createdBy() {
          return new FieldNode(schema.User, undefined, true);
        }
      },
      { name: "User", extension: ((extensions as any) || {}).User }
    );
  },
  get UserWhereUniqueInput() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.ID, false);
        }
      },
      { name: "UserWhereUniqueInput" }
    );
  },
  get _QueryMeta() {
    return new ObjectNode(
      {
        get count() {
          return new FieldNode(schema.Int, undefined, true);
        }
      },
      { name: "_QueryMeta", extension: ((extensions as any) || {})._QueryMeta }
    );
  },
  get _ListMeta() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get access() {
          return new FieldNode(schema._ListAccess, undefined, true);
        },
        get schema() {
          return new FieldNode(schema._ListSchema, undefined, true);
        }
      },
      { name: "_ListMeta", extension: ((extensions as any) || {})._ListMeta }
    );
  },
  get _ListAccess() {
    return new ObjectNode(
      {
        get create() {
          return new FieldNode(schema.Boolean, undefined, true);
        },
        get read() {
          return new FieldNode(schema.JSON, undefined, true);
        },
        get update() {
          return new FieldNode(schema.JSON, undefined, true);
        },
        get delete() {
          return new FieldNode(schema.JSON, undefined, true);
        },
        get auth() {
          return new FieldNode(schema.JSON, undefined, true);
        }
      },
      {
        name: "_ListAccess",
        extension: ((extensions as any) || {})._ListAccess
      }
    );
  },
  get JSON() {
    return new ScalarNode({
      name: "JSON",
      extension: ((extensions as any) || {}).JSON
    });
  },
  get _ListSchema() {
    return new ObjectNode(
      {
        get type() {
          return new FieldNode(schema.String, undefined, true);
        },
        get queries() {
          return new FieldNode(
            new ArrayNode(schema.String, true),
            undefined,
            true
          );
        },
        get relatedFields() {
          return new FieldNode(
            new ArrayNode(schema._ListSchemaRelatedFields, true),
            undefined,
            true
          );
        }
      },
      {
        name: "_ListSchema",
        extension: ((extensions as any) || {})._ListSchema
      }
    );
  },
  get _ListSchemaRelatedFields() {
    return new ObjectNode(
      {
        get type() {
          return new FieldNode(schema.String, undefined, true);
        },
        get fields() {
          return new FieldNode(
            new ArrayNode(schema.String, true),
            undefined,
            true
          );
        }
      },
      {
        name: "_ListSchemaRelatedFields",
        extension: ((extensions as any) || {})._ListSchemaRelatedFields
      }
    );
  },
  get Mutation() {
    return new ObjectNode(
      {
        get createUser() {
          return new FieldNode(
            schema.User,
            new Arguments({
              get data() {
                return new ArgumentsField(schema.UserCreateInput, true);
              }
            }),
            true
          );
        },
        get createUsers() {
          return new FieldNode(
            new ArrayNode(schema.User, true),
            new Arguments({
              get data() {
                return new ArgumentsField(
                  new ArrayNode(schema.UsersCreateInput, true),
                  true
                );
              }
            }),
            true
          );
        },
        get updateUser() {
          return new FieldNode(
            schema.User,
            new Arguments({
              get id() {
                return new ArgumentsField(schema.ID, false);
              },
              get data() {
                return new ArgumentsField(schema.UserUpdateInput, true);
              }
            }),
            true
          );
        },
        get updateUsers() {
          return new FieldNode(
            new ArrayNode(schema.User, true),
            new Arguments({
              get data() {
                return new ArgumentsField(
                  new ArrayNode(schema.UsersUpdateInput, true),
                  true
                );
              }
            }),
            true
          );
        },
        get deleteUser() {
          return new FieldNode(
            schema.User,
            new Arguments(
              {
                get id() {
                  return new ArgumentsField(schema.ID, false);
                }
              },
              true
            ),
            true
          );
        },
        get deleteUsers() {
          return new FieldNode(
            new ArrayNode(schema.User, true),
            new Arguments({
              get ids() {
                return new ArgumentsField(new ArrayNode(schema.ID, true), true);
              }
            }),
            true
          );
        },
        get authenticateUserWithPassword() {
          return new FieldNode(
            schema.authenticateUserOutput,
            new Arguments({
              get email() {
                return new ArgumentsField(schema.String, true);
              },
              get password() {
                return new ArgumentsField(schema.String, true);
              }
            }),
            true
          );
        },
        get unauthenticateUser() {
          return new FieldNode(
            schema.unauthenticateUserOutput,
            undefined,
            true
          );
        }
      },
      { name: "Mutation", extension: ((extensions as any) || {}).Mutation }
    );
  },
  get UserCreateInput() {
    return new InputNode(
      {
        get email() {
          return new InputNodeField(schema.String, true);
        },
        get password() {
          return new InputNodeField(schema.String, true);
        },
        get isAdmin() {
          return new InputNodeField(schema.Boolean, true);
        },
        get bio() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "UserCreateInput" }
    );
  },
  get UsersCreateInput() {
    return new InputNode(
      {
        get data() {
          return new InputNodeField(schema.UserCreateInput, true);
        }
      },
      { name: "UsersCreateInput" }
    );
  },
  get UserUpdateInput() {
    return new InputNode(
      {
        get password() {
          return new InputNodeField(schema.String, true);
        },
        get isAdmin() {
          return new InputNodeField(schema.Boolean, true);
        },
        get bio() {
          return new InputNodeField(schema.String, true);
        }
      },
      { name: "UserUpdateInput" }
    );
  },
  get UsersUpdateInput() {
    return new InputNode(
      {
        get id() {
          return new InputNodeField(schema.ID, false);
        },
        get data() {
          return new InputNodeField(schema.UserUpdateInput, true);
        }
      },
      { name: "UsersUpdateInput" }
    );
  },
  get authenticateUserOutput() {
    return new ObjectNode(
      {
        get token() {
          return new FieldNode(schema.String, undefined, true);
        },
        get item() {
          return new FieldNode(schema.User, undefined, true);
        }
      },
      {
        name: "authenticateUserOutput",
        extension: ((extensions as any) || {}).authenticateUserOutput
      }
    );
  },
  get unauthenticateUserOutput() {
    return new ObjectNode(
      {
        get success() {
          return new FieldNode(schema.Boolean, undefined, true);
        }
      },
      {
        name: "unauthenticateUserOutput",
        extension: ((extensions as any) || {}).unauthenticateUserOutput
      }
    );
  },
  get __Schema() {
    return new ObjectNode(
      {
        get types() {
          return new FieldNode(
            new ArrayNode(schema.__Type, false),
            undefined,
            false
          );
        },
        get queryType() {
          return new FieldNode(schema.__Type, undefined, false);
        },
        get mutationType() {
          return new FieldNode(schema.__Type, undefined, true);
        },
        get subscriptionType() {
          return new FieldNode(schema.__Type, undefined, true);
        },
        get directives() {
          return new FieldNode(
            new ArrayNode(schema.__Directive, false),
            undefined,
            false
          );
        }
      },
      { name: "__Schema", extension: ((extensions as any) || {}).__Schema }
    );
  },
  get __Type() {
    return new ObjectNode(
      {
        get kind() {
          return new FieldNode(schema.__TypeKind, undefined, false);
        },
        get name() {
          return new FieldNode(schema.String, undefined, true);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get fields() {
          return new FieldNode(
            new ArrayNode(schema.__Field, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get interfaces() {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true
          );
        },
        get possibleTypes() {
          return new FieldNode(
            new ArrayNode(schema.__Type, true),
            undefined,
            true
          );
        },
        get enumValues() {
          return new FieldNode(
            new ArrayNode(schema.__EnumValue, true),
            new Arguments({
              get includeDeprecated() {
                return new ArgumentsField(schema.Boolean, true);
              }
            }),
            true
          );
        },
        get inputFields() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, true),
            undefined,
            true
          );
        },
        get ofType() {
          return new FieldNode(schema.__Type, undefined, true);
        }
      },
      { name: "__Type", extension: ((extensions as any) || {}).__Type }
    );
  },
  get __TypeKind() {
    return new EnumNode({ name: "__TypeKind" });
  },
  get __Field() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get args() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            undefined,
            false
          );
        },
        get type() {
          return new FieldNode(schema.__Type, undefined, false);
        },
        get isDeprecated() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get deprecationReason() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      { name: "__Field", extension: ((extensions as any) || {}).__Field }
    );
  },
  get __InputValue() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get type() {
          return new FieldNode(schema.__Type, undefined, false);
        },
        get defaultValue() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "__InputValue",
        extension: ((extensions as any) || {}).__InputValue
      }
    );
  },
  get __EnumValue() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get isDeprecated() {
          return new FieldNode(schema.Boolean, undefined, false);
        },
        get deprecationReason() {
          return new FieldNode(schema.String, undefined, true);
        }
      },
      {
        name: "__EnumValue",
        extension: ((extensions as any) || {}).__EnumValue
      }
    );
  },
  get __Directive() {
    return new ObjectNode(
      {
        get name() {
          return new FieldNode(schema.String, undefined, false);
        },
        get description() {
          return new FieldNode(schema.String, undefined, true);
        },
        get locations() {
          return new FieldNode(
            new ArrayNode(schema.__DirectiveLocation, false),
            undefined,
            false
          );
        },
        get args() {
          return new FieldNode(
            new ArrayNode(schema.__InputValue, false),
            undefined,
            false
          );
        }
      },
      {
        name: "__Directive",
        extension: ((extensions as any) || {}).__Directive
      }
    );
  },
  get __DirectiveLocation() {
    return new EnumNode({ name: "__DirectiveLocation" });
  },
  get UserRelateToOneInput() {
    return new InputNode(
      {
        get create() {
          return new InputNodeField(schema.UserCreateInput, true);
        },
        get connect() {
          return new InputNodeField(schema.UserWhereUniqueInput, true);
        },
        get disconnect() {
          return new InputNodeField(schema.UserWhereUniqueInput, true);
        },
        get disconnectAll() {
          return new InputNodeField(schema.Boolean, true);
        }
      },
      { name: "UserRelateToOneInput" }
    );
  },
  get CacheControlScope() {
    return new EnumNode({ name: "CacheControlScope" });
  },
  get Upload() {
    return new ScalarNode({
      name: "Upload",
      extension: ((extensions as any) || {}).Upload
    });
  }
};

lazyGetters(schema);
