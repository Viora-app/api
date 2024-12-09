/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/crowdfunding.json`.
 */
export type Crowdfunding = {
  "address": "7pBRxb4E39TNUQFYHmi319k9wBogxCqd1eNj6jtJtJC3",
  "metadata": {
    "name": "crowdfunding",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "addContributionTier",
      "discriminator": [
        73,
        127,
        230,
        94,
        219,
        188,
        84,
        209
      ],
      "accounts": [
        {
          "name": "project",
          "writable": true
        },
        {
          "name": "artist",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "tierId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "contribute",
      "discriminator": [
        82,
        33,
        68,
        131,
        32,
        0,
        205,
        95
      ],
      "accounts": [
        {
          "name": "contributer",
          "writable": true,
          "signer": true
        },
        {
          "name": "contributerAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "contributer"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "usdcMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "project",
          "writable": true
        },
        {
          "name": "projectAta",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "project"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "usdcMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "usdcMint"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        },
        {
          "name": "tierId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "finalizeProject",
      "discriminator": [
        161,
        232,
        117,
        5,
        108,
        131,
        145,
        232
      ],
      "accounts": [
        {
          "name": "project",
          "writable": true
        },
        {
          "name": "projectAta",
          "writable": true
        },
        {
          "name": "artist"
        },
        {
          "name": "artistAta",
          "writable": true
        },
        {
          "name": "viora"
        },
        {
          "name": "vioraAta",
          "writable": true
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": []
    },
    {
      "name": "initProject",
      "discriminator": [
        40,
        78,
        156,
        122,
        54,
        85,
        204,
        46
      ],
      "accounts": [
        {
          "name": "project",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "arg",
                "path": "projectId"
              }
            ]
          }
        },
        {
          "name": "artist",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "projectId",
          "type": "u64"
        },
        {
          "name": "softCap",
          "type": "u64"
        },
        {
          "name": "hardCap",
          "type": "u64"
        },
        {
          "name": "deadline",
          "type": "i64"
        }
      ]
    },
    {
      "name": "setPublish",
      "discriminator": [
        150,
        37,
        197,
        176,
        219,
        63,
        208,
        161
      ],
      "accounts": [
        {
          "name": "project",
          "writable": true
        },
        {
          "name": "artist",
          "signer": true
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "project",
      "discriminator": [
        205,
        168,
        189,
        202,
        181,
        247,
        142,
        19
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "projectNotInDraft",
      "msg": "The project is not in Draft state."
    },
    {
      "code": 6001,
      "name": "projectNotPublished",
      "msg": "The project is not Published."
    },
    {
      "code": 6002,
      "name": "deadlinePassed",
      "msg": "The project's deadline has passed."
    },
    {
      "code": 6003,
      "name": "deadlineNotPassed",
      "msg": "The project's deadline Not passed."
    },
    {
      "code": 6004,
      "name": "hardCapReached",
      "msg": "The project has reached the hard cap."
    },
    {
      "code": 6005,
      "name": "softCapNotReached",
      "msg": "The soft cap has not been reached."
    },
    {
      "code": 6006,
      "name": "invalidSoftCap",
      "msg": "The soft cap must be less than hard cap."
    },
    {
      "code": 6007,
      "name": "deadlineNotReached",
      "msg": "The project's deadline has not been reached."
    },
    {
      "code": 6008,
      "name": "projectNotFailing",
      "msg": "The project is not in Failing state."
    },
    {
      "code": 6009,
      "name": "projectFailed",
      "msg": "The project has failed."
    },
    {
      "code": 6010,
      "name": "noContributionTiers",
      "msg": "The project must have at least one contribution tier."
    },
    {
      "code": 6011,
      "name": "maxContributionTiersReached",
      "msg": "The project already has the maximum number of contribution tiers."
    },
    {
      "code": 6012,
      "name": "tierNotFound",
      "msg": "The contribution tier was not found."
    },
    {
      "code": 6013,
      "name": "incorrectAmount",
      "msg": "The contribution amount does not match the required tier amount."
    },
    {
      "code": 6014,
      "name": "insufficientFunds",
      "msg": "The project account does not have enough funds."
    }
  ],
  "types": [
    {
      "name": "contributionTier",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tierId",
            "type": "u64"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "project",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "projectId",
            "type": "u64"
          },
          {
            "name": "softCap",
            "type": "u64"
          },
          {
            "name": "hardCap",
            "type": "u64"
          },
          {
            "name": "deadline",
            "type": "i64"
          },
          {
            "name": "currentFunding",
            "type": "u64"
          },
          {
            "name": "contributionTiers",
            "type": {
              "vec": {
                "defined": {
                  "name": "contributionTier"
                }
              }
            }
          },
          {
            "name": "status",
            "type": {
              "defined": {
                "name": "projectStatus"
              }
            }
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "projectStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "draft"
          },
          {
            "name": "published"
          },
          {
            "name": "successful"
          },
          {
            "name": "soldOut"
          },
          {
            "name": "failing"
          },
          {
            "name": "failed"
          }
        ]
      }
    }
  ]
};
