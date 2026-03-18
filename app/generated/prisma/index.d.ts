
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model projectgroup
 * 
 */
export type projectgroup = $Result.DefaultSelection<Prisma.$projectgroupPayload>
/**
 * Model grouprequest
 * 
 */
export type grouprequest = $Result.DefaultSelection<Prisma.$grouprequestPayload>
/**
 * Model projectgroupmember
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type projectgroupmember = $Result.DefaultSelection<Prisma.$projectgroupmemberPayload>
/**
 * Model projectmeeting
 * 
 */
export type projectmeeting = $Result.DefaultSelection<Prisma.$projectmeetingPayload>
/**
 * Model projectmeetingattendance
 * 
 */
export type projectmeetingattendance = $Result.DefaultSelection<Prisma.$projectmeetingattendancePayload>
/**
 * Model projecttype
 * 
 */
export type projecttype = $Result.DefaultSelection<Prisma.$projecttypePayload>
/**
 * Model staff
 * 
 */
export type staff = $Result.DefaultSelection<Prisma.$staffPayload>
/**
 * Model student
 * 
 */
export type student = $Result.DefaultSelection<Prisma.$studentPayload>
/**
 * Model activitylog
 * 
 */
export type activitylog = $Result.DefaultSelection<Prisma.$activitylogPayload>
/**
 * Model grade
 * 
 */
export type grade = $Result.DefaultSelection<Prisma.$gradePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Projectgroups
 * const projectgroups = await prisma.projectgroup.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Projectgroups
   * const projectgroups = await prisma.projectgroup.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.projectgroup`: Exposes CRUD operations for the **projectgroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projectgroups
    * const projectgroups = await prisma.projectgroup.findMany()
    * ```
    */
  get projectgroup(): Prisma.projectgroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.grouprequest`: Exposes CRUD operations for the **grouprequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Grouprequests
    * const grouprequests = await prisma.grouprequest.findMany()
    * ```
    */
  get grouprequest(): Prisma.grouprequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectgroupmember`: Exposes CRUD operations for the **projectgroupmember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projectgroupmembers
    * const projectgroupmembers = await prisma.projectgroupmember.findMany()
    * ```
    */
  get projectgroupmember(): Prisma.projectgroupmemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectmeeting`: Exposes CRUD operations for the **projectmeeting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projectmeetings
    * const projectmeetings = await prisma.projectmeeting.findMany()
    * ```
    */
  get projectmeeting(): Prisma.projectmeetingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectmeetingattendance`: Exposes CRUD operations for the **projectmeetingattendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projectmeetingattendances
    * const projectmeetingattendances = await prisma.projectmeetingattendance.findMany()
    * ```
    */
  get projectmeetingattendance(): Prisma.projectmeetingattendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projecttype`: Exposes CRUD operations for the **projecttype** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projecttypes
    * const projecttypes = await prisma.projecttype.findMany()
    * ```
    */
  get projecttype(): Prisma.projecttypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staff`: Exposes CRUD operations for the **staff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Staff
    * const staff = await prisma.staff.findMany()
    * ```
    */
  get staff(): Prisma.staffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.studentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activitylog`: Exposes CRUD operations for the **activitylog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activitylogs
    * const activitylogs = await prisma.activitylog.findMany()
    * ```
    */
  get activitylog(): Prisma.activitylogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.grade`: Exposes CRUD operations for the **grade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Grades
    * const grades = await prisma.grade.findMany()
    * ```
    */
  get grade(): Prisma.gradeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    projectgroup: 'projectgroup',
    grouprequest: 'grouprequest',
    projectgroupmember: 'projectgroupmember',
    projectmeeting: 'projectmeeting',
    projectmeetingattendance: 'projectmeetingattendance',
    projecttype: 'projecttype',
    staff: 'staff',
    student: 'student',
    activitylog: 'activitylog',
    grade: 'grade'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "projectgroup" | "grouprequest" | "projectgroupmember" | "projectmeeting" | "projectmeetingattendance" | "projecttype" | "staff" | "student" | "activitylog" | "grade"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      projectgroup: {
        payload: Prisma.$projectgroupPayload<ExtArgs>
        fields: Prisma.projectgroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectgroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectgroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectgroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectgroupPayload>
          }
          findFirst: {
            args: Prisma.projectgroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectgroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectgroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectgroupPayload>
          }
          findMany: {
            args: Prisma.projectgroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectgroupPayload>[]
          }
          create: {
            args: Prisma.projectgroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectgroupPayload>
          }
          createMany: {
            args: Prisma.projectgroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.projectgroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectgroupPayload>[]
          }
          delete: {
            args: Prisma.projectgroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectgroupPayload>
          }
          update: {
            args: Prisma.projectgroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectgroupPayload>
          }
          deleteMany: {
            args: Prisma.projectgroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectgroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.projectgroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectgroupPayload>[]
          }
          upsert: {
            args: Prisma.projectgroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectgroupPayload>
          }
          aggregate: {
            args: Prisma.ProjectgroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectgroup>
          }
          groupBy: {
            args: Prisma.projectgroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectgroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectgroupCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectgroupCountAggregateOutputType> | number
          }
        }
      }
      grouprequest: {
        payload: Prisma.$grouprequestPayload<ExtArgs>
        fields: Prisma.grouprequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.grouprequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grouprequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.grouprequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grouprequestPayload>
          }
          findFirst: {
            args: Prisma.grouprequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grouprequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.grouprequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grouprequestPayload>
          }
          findMany: {
            args: Prisma.grouprequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grouprequestPayload>[]
          }
          create: {
            args: Prisma.grouprequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grouprequestPayload>
          }
          createMany: {
            args: Prisma.grouprequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.grouprequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grouprequestPayload>[]
          }
          delete: {
            args: Prisma.grouprequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grouprequestPayload>
          }
          update: {
            args: Prisma.grouprequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grouprequestPayload>
          }
          deleteMany: {
            args: Prisma.grouprequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.grouprequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.grouprequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grouprequestPayload>[]
          }
          upsert: {
            args: Prisma.grouprequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$grouprequestPayload>
          }
          aggregate: {
            args: Prisma.GrouprequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrouprequest>
          }
          groupBy: {
            args: Prisma.grouprequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<GrouprequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.grouprequestCountArgs<ExtArgs>
            result: $Utils.Optional<GrouprequestCountAggregateOutputType> | number
          }
        }
      }
      projectgroupmember: {
        payload: Prisma.$projectgroupmemberPayload<ExtArgs>
        fields: Prisma.projectgroupmemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectgroupmemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectgroupmemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectgroupmemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectgroupmemberPayload>
          }
          findFirst: {
            args: Prisma.projectgroupmemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectgroupmemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectgroupmemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectgroupmemberPayload>
          }
          findMany: {
            args: Prisma.projectgroupmemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectgroupmemberPayload>[]
          }
          create: {
            args: Prisma.projectgroupmemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectgroupmemberPayload>
          }
          createMany: {
            args: Prisma.projectgroupmemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.projectgroupmemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectgroupmemberPayload>[]
          }
          delete: {
            args: Prisma.projectgroupmemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectgroupmemberPayload>
          }
          update: {
            args: Prisma.projectgroupmemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectgroupmemberPayload>
          }
          deleteMany: {
            args: Prisma.projectgroupmemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectgroupmemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.projectgroupmemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectgroupmemberPayload>[]
          }
          upsert: {
            args: Prisma.projectgroupmemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectgroupmemberPayload>
          }
          aggregate: {
            args: Prisma.ProjectgroupmemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectgroupmember>
          }
          groupBy: {
            args: Prisma.projectgroupmemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectgroupmemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectgroupmemberCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectgroupmemberCountAggregateOutputType> | number
          }
        }
      }
      projectmeeting: {
        payload: Prisma.$projectmeetingPayload<ExtArgs>
        fields: Prisma.projectmeetingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectmeetingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectmeetingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectmeetingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectmeetingPayload>
          }
          findFirst: {
            args: Prisma.projectmeetingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectmeetingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectmeetingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectmeetingPayload>
          }
          findMany: {
            args: Prisma.projectmeetingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectmeetingPayload>[]
          }
          create: {
            args: Prisma.projectmeetingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectmeetingPayload>
          }
          createMany: {
            args: Prisma.projectmeetingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.projectmeetingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectmeetingPayload>[]
          }
          delete: {
            args: Prisma.projectmeetingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectmeetingPayload>
          }
          update: {
            args: Prisma.projectmeetingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectmeetingPayload>
          }
          deleteMany: {
            args: Prisma.projectmeetingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectmeetingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.projectmeetingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectmeetingPayload>[]
          }
          upsert: {
            args: Prisma.projectmeetingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectmeetingPayload>
          }
          aggregate: {
            args: Prisma.ProjectmeetingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectmeeting>
          }
          groupBy: {
            args: Prisma.projectmeetingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectmeetingGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectmeetingCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectmeetingCountAggregateOutputType> | number
          }
        }
      }
      projectmeetingattendance: {
        payload: Prisma.$projectmeetingattendancePayload<ExtArgs>
        fields: Prisma.projectmeetingattendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectmeetingattendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectmeetingattendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectmeetingattendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectmeetingattendancePayload>
          }
          findFirst: {
            args: Prisma.projectmeetingattendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectmeetingattendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectmeetingattendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectmeetingattendancePayload>
          }
          findMany: {
            args: Prisma.projectmeetingattendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectmeetingattendancePayload>[]
          }
          create: {
            args: Prisma.projectmeetingattendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectmeetingattendancePayload>
          }
          createMany: {
            args: Prisma.projectmeetingattendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.projectmeetingattendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectmeetingattendancePayload>[]
          }
          delete: {
            args: Prisma.projectmeetingattendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectmeetingattendancePayload>
          }
          update: {
            args: Prisma.projectmeetingattendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectmeetingattendancePayload>
          }
          deleteMany: {
            args: Prisma.projectmeetingattendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectmeetingattendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.projectmeetingattendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectmeetingattendancePayload>[]
          }
          upsert: {
            args: Prisma.projectmeetingattendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectmeetingattendancePayload>
          }
          aggregate: {
            args: Prisma.ProjectmeetingattendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectmeetingattendance>
          }
          groupBy: {
            args: Prisma.projectmeetingattendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectmeetingattendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectmeetingattendanceCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectmeetingattendanceCountAggregateOutputType> | number
          }
        }
      }
      projecttype: {
        payload: Prisma.$projecttypePayload<ExtArgs>
        fields: Prisma.projecttypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projecttypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projecttypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projecttypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projecttypePayload>
          }
          findFirst: {
            args: Prisma.projecttypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projecttypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projecttypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projecttypePayload>
          }
          findMany: {
            args: Prisma.projecttypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projecttypePayload>[]
          }
          create: {
            args: Prisma.projecttypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projecttypePayload>
          }
          createMany: {
            args: Prisma.projecttypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.projecttypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projecttypePayload>[]
          }
          delete: {
            args: Prisma.projecttypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projecttypePayload>
          }
          update: {
            args: Prisma.projecttypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projecttypePayload>
          }
          deleteMany: {
            args: Prisma.projecttypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projecttypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.projecttypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projecttypePayload>[]
          }
          upsert: {
            args: Prisma.projecttypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projecttypePayload>
          }
          aggregate: {
            args: Prisma.ProjecttypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjecttype>
          }
          groupBy: {
            args: Prisma.projecttypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjecttypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.projecttypeCountArgs<ExtArgs>
            result: $Utils.Optional<ProjecttypeCountAggregateOutputType> | number
          }
        }
      }
      staff: {
        payload: Prisma.$staffPayload<ExtArgs>
        fields: Prisma.staffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.staffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.staffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          findFirst: {
            args: Prisma.staffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.staffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          findMany: {
            args: Prisma.staffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>[]
          }
          create: {
            args: Prisma.staffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          createMany: {
            args: Prisma.staffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.staffCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>[]
          }
          delete: {
            args: Prisma.staffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          update: {
            args: Prisma.staffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          deleteMany: {
            args: Prisma.staffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.staffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.staffUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>[]
          }
          upsert: {
            args: Prisma.staffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          aggregate: {
            args: Prisma.StaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaff>
          }
          groupBy: {
            args: Prisma.staffGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.staffCountArgs<ExtArgs>
            result: $Utils.Optional<StaffCountAggregateOutputType> | number
          }
        }
      }
      student: {
        payload: Prisma.$studentPayload<ExtArgs>
        fields: Prisma.studentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.studentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.studentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          findFirst: {
            args: Prisma.studentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.studentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          findMany: {
            args: Prisma.studentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>[]
          }
          create: {
            args: Prisma.studentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          createMany: {
            args: Prisma.studentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.studentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>[]
          }
          delete: {
            args: Prisma.studentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          update: {
            args: Prisma.studentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          deleteMany: {
            args: Prisma.studentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.studentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.studentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>[]
          }
          upsert: {
            args: Prisma.studentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.studentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.studentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      activitylog: {
        payload: Prisma.$activitylogPayload<ExtArgs>
        fields: Prisma.activitylogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.activitylogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitylogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.activitylogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitylogPayload>
          }
          findFirst: {
            args: Prisma.activitylogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitylogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.activitylogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitylogPayload>
          }
          findMany: {
            args: Prisma.activitylogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitylogPayload>[]
          }
          create: {
            args: Prisma.activitylogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitylogPayload>
          }
          createMany: {
            args: Prisma.activitylogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.activitylogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitylogPayload>[]
          }
          delete: {
            args: Prisma.activitylogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitylogPayload>
          }
          update: {
            args: Prisma.activitylogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitylogPayload>
          }
          deleteMany: {
            args: Prisma.activitylogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.activitylogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.activitylogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitylogPayload>[]
          }
          upsert: {
            args: Prisma.activitylogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activitylogPayload>
          }
          aggregate: {
            args: Prisma.ActivitylogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivitylog>
          }
          groupBy: {
            args: Prisma.activitylogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivitylogGroupByOutputType>[]
          }
          count: {
            args: Prisma.activitylogCountArgs<ExtArgs>
            result: $Utils.Optional<ActivitylogCountAggregateOutputType> | number
          }
        }
      }
      grade: {
        payload: Prisma.$gradePayload<ExtArgs>
        fields: Prisma.gradeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.gradeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gradePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.gradeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gradePayload>
          }
          findFirst: {
            args: Prisma.gradeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gradePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.gradeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gradePayload>
          }
          findMany: {
            args: Prisma.gradeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gradePayload>[]
          }
          create: {
            args: Prisma.gradeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gradePayload>
          }
          createMany: {
            args: Prisma.gradeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.gradeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gradePayload>[]
          }
          delete: {
            args: Prisma.gradeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gradePayload>
          }
          update: {
            args: Prisma.gradeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gradePayload>
          }
          deleteMany: {
            args: Prisma.gradeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.gradeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.gradeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gradePayload>[]
          }
          upsert: {
            args: Prisma.gradeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gradePayload>
          }
          aggregate: {
            args: Prisma.GradeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrade>
          }
          groupBy: {
            args: Prisma.gradeGroupByArgs<ExtArgs>
            result: $Utils.Optional<GradeGroupByOutputType>[]
          }
          count: {
            args: Prisma.gradeCountArgs<ExtArgs>
            result: $Utils.Optional<GradeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    projectgroup?: projectgroupOmit
    grouprequest?: grouprequestOmit
    projectgroupmember?: projectgroupmemberOmit
    projectmeeting?: projectmeetingOmit
    projectmeetingattendance?: projectmeetingattendanceOmit
    projecttype?: projecttypeOmit
    staff?: staffOmit
    student?: studentOmit
    activitylog?: activitylogOmit
    grade?: gradeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProjectgroupCountOutputType
   */

  export type ProjectgroupCountOutputType = {
    projectgroupmember: number
    projectmeeting: number
    grade: number
  }

  export type ProjectgroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectgroupmember?: boolean | ProjectgroupCountOutputTypeCountProjectgroupmemberArgs
    projectmeeting?: boolean | ProjectgroupCountOutputTypeCountProjectmeetingArgs
    grade?: boolean | ProjectgroupCountOutputTypeCountGradeArgs
  }

  // Custom InputTypes
  /**
   * ProjectgroupCountOutputType without action
   */
  export type ProjectgroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectgroupCountOutputType
     */
    select?: ProjectgroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectgroupCountOutputType without action
   */
  export type ProjectgroupCountOutputTypeCountProjectgroupmemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectgroupmemberWhereInput
  }

  /**
   * ProjectgroupCountOutputType without action
   */
  export type ProjectgroupCountOutputTypeCountProjectmeetingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectmeetingWhereInput
  }

  /**
   * ProjectgroupCountOutputType without action
   */
  export type ProjectgroupCountOutputTypeCountGradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gradeWhereInput
  }


  /**
   * Count Type ProjectmeetingCountOutputType
   */

  export type ProjectmeetingCountOutputType = {
    projectmeetingattendance: number
  }

  export type ProjectmeetingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectmeetingattendance?: boolean | ProjectmeetingCountOutputTypeCountProjectmeetingattendanceArgs
  }

  // Custom InputTypes
  /**
   * ProjectmeetingCountOutputType without action
   */
  export type ProjectmeetingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectmeetingCountOutputType
     */
    select?: ProjectmeetingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectmeetingCountOutputType without action
   */
  export type ProjectmeetingCountOutputTypeCountProjectmeetingattendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectmeetingattendanceWhereInput
  }


  /**
   * Count Type ProjecttypeCountOutputType
   */

  export type ProjecttypeCountOutputType = {
    projectgroup: number
  }

  export type ProjecttypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectgroup?: boolean | ProjecttypeCountOutputTypeCountProjectgroupArgs
  }

  // Custom InputTypes
  /**
   * ProjecttypeCountOutputType without action
   */
  export type ProjecttypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjecttypeCountOutputType
     */
    select?: ProjecttypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjecttypeCountOutputType without action
   */
  export type ProjecttypeCountOutputTypeCountProjectgroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectgroupWhereInput
  }


  /**
   * Count Type StaffCountOutputType
   */

  export type StaffCountOutputType = {
    projectgroup_projectgroup_convenerstaffidTostaff: number
    projectgroup_projectgroup_expertstaffidTostaff: number
    projectmeeting: number
    other_staff: number
    student: number
    grouprequest: number
    grade: number
  }

  export type StaffCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectgroup_projectgroup_convenerstaffidTostaff?: boolean | StaffCountOutputTypeCountProjectgroup_projectgroup_convenerstaffidTostaffArgs
    projectgroup_projectgroup_expertstaffidTostaff?: boolean | StaffCountOutputTypeCountProjectgroup_projectgroup_expertstaffidTostaffArgs
    projectmeeting?: boolean | StaffCountOutputTypeCountProjectmeetingArgs
    other_staff?: boolean | StaffCountOutputTypeCountOther_staffArgs
    student?: boolean | StaffCountOutputTypeCountStudentArgs
    grouprequest?: boolean | StaffCountOutputTypeCountGrouprequestArgs
    grade?: boolean | StaffCountOutputTypeCountGradeArgs
  }

  // Custom InputTypes
  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffCountOutputType
     */
    select?: StaffCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountProjectgroup_projectgroup_convenerstaffidTostaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectgroupWhereInput
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountProjectgroup_projectgroup_expertstaffidTostaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectgroupWhereInput
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountProjectmeetingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectmeetingWhereInput
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountOther_staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: staffWhereInput
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountStudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentWhereInput
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountGrouprequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: grouprequestWhereInput
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountGradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gradeWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    projectgroupmember: number
    projectmeetingattendance: number
    grouprequest: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectgroupmember?: boolean | StudentCountOutputTypeCountProjectgroupmemberArgs
    projectmeetingattendance?: boolean | StudentCountOutputTypeCountProjectmeetingattendanceArgs
    grouprequest?: boolean | StudentCountOutputTypeCountGrouprequestArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountProjectgroupmemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectgroupmemberWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountProjectmeetingattendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectmeetingattendanceWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountGrouprequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: grouprequestWhereInput
  }


  /**
   * Models
   */

  /**
   * Model projectgroup
   */

  export type AggregateProjectgroup = {
    _count: ProjectgroupCountAggregateOutputType | null
    _avg: ProjectgroupAvgAggregateOutputType | null
    _sum: ProjectgroupSumAggregateOutputType | null
    _min: ProjectgroupMinAggregateOutputType | null
    _max: ProjectgroupMaxAggregateOutputType | null
  }

  export type ProjectgroupAvgAggregateOutputType = {
    projectgroupid: number | null
    projecttypeid: number | null
    averagecpi: number | null
    convenerstaffid: number | null
    expertstaffid: number | null
  }

  export type ProjectgroupSumAggregateOutputType = {
    projectgroupid: number | null
    projecttypeid: number | null
    averagecpi: number | null
    convenerstaffid: number | null
    expertstaffid: number | null
  }

  export type ProjectgroupMinAggregateOutputType = {
    projectgroupid: number | null
    projecttypeid: number | null
    projectgroupname: string | null
    projecttitle: string | null
    projectarea: string | null
    projectdescription: string | null
    averagecpi: number | null
    description: string | null
    convenerstaffid: number | null
    expertstaffid: number | null
    status: string | null
    created: Date | null
    modified: Date | null
  }

  export type ProjectgroupMaxAggregateOutputType = {
    projectgroupid: number | null
    projecttypeid: number | null
    projectgroupname: string | null
    projecttitle: string | null
    projectarea: string | null
    projectdescription: string | null
    averagecpi: number | null
    description: string | null
    convenerstaffid: number | null
    expertstaffid: number | null
    status: string | null
    created: Date | null
    modified: Date | null
  }

  export type ProjectgroupCountAggregateOutputType = {
    projectgroupid: number
    projecttypeid: number
    projectgroupname: number
    projecttitle: number
    projectarea: number
    projectdescription: number
    averagecpi: number
    description: number
    convenerstaffid: number
    expertstaffid: number
    status: number
    created: number
    modified: number
    _all: number
  }


  export type ProjectgroupAvgAggregateInputType = {
    projectgroupid?: true
    projecttypeid?: true
    averagecpi?: true
    convenerstaffid?: true
    expertstaffid?: true
  }

  export type ProjectgroupSumAggregateInputType = {
    projectgroupid?: true
    projecttypeid?: true
    averagecpi?: true
    convenerstaffid?: true
    expertstaffid?: true
  }

  export type ProjectgroupMinAggregateInputType = {
    projectgroupid?: true
    projecttypeid?: true
    projectgroupname?: true
    projecttitle?: true
    projectarea?: true
    projectdescription?: true
    averagecpi?: true
    description?: true
    convenerstaffid?: true
    expertstaffid?: true
    status?: true
    created?: true
    modified?: true
  }

  export type ProjectgroupMaxAggregateInputType = {
    projectgroupid?: true
    projecttypeid?: true
    projectgroupname?: true
    projecttitle?: true
    projectarea?: true
    projectdescription?: true
    averagecpi?: true
    description?: true
    convenerstaffid?: true
    expertstaffid?: true
    status?: true
    created?: true
    modified?: true
  }

  export type ProjectgroupCountAggregateInputType = {
    projectgroupid?: true
    projecttypeid?: true
    projectgroupname?: true
    projecttitle?: true
    projectarea?: true
    projectdescription?: true
    averagecpi?: true
    description?: true
    convenerstaffid?: true
    expertstaffid?: true
    status?: true
    created?: true
    modified?: true
    _all?: true
  }

  export type ProjectgroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projectgroup to aggregate.
     */
    where?: projectgroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projectgroups to fetch.
     */
    orderBy?: projectgroupOrderByWithRelationInput | projectgroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectgroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projectgroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projectgroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projectgroups
    **/
    _count?: true | ProjectgroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectgroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectgroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectgroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectgroupMaxAggregateInputType
  }

  export type GetProjectgroupAggregateType<T extends ProjectgroupAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectgroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectgroup[P]>
      : GetScalarType<T[P], AggregateProjectgroup[P]>
  }




  export type projectgroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectgroupWhereInput
    orderBy?: projectgroupOrderByWithAggregationInput | projectgroupOrderByWithAggregationInput[]
    by: ProjectgroupScalarFieldEnum[] | ProjectgroupScalarFieldEnum
    having?: projectgroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectgroupCountAggregateInputType | true
    _avg?: ProjectgroupAvgAggregateInputType
    _sum?: ProjectgroupSumAggregateInputType
    _min?: ProjectgroupMinAggregateInputType
    _max?: ProjectgroupMaxAggregateInputType
  }

  export type ProjectgroupGroupByOutputType = {
    projectgroupid: number
    projecttypeid: number | null
    projectgroupname: string | null
    projecttitle: string | null
    projectarea: string | null
    projectdescription: string | null
    averagecpi: number | null
    description: string | null
    convenerstaffid: number | null
    expertstaffid: number | null
    status: string | null
    created: Date | null
    modified: Date | null
    _count: ProjectgroupCountAggregateOutputType | null
    _avg: ProjectgroupAvgAggregateOutputType | null
    _sum: ProjectgroupSumAggregateOutputType | null
    _min: ProjectgroupMinAggregateOutputType | null
    _max: ProjectgroupMaxAggregateOutputType | null
  }

  type GetProjectgroupGroupByPayload<T extends projectgroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectgroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectgroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectgroupGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectgroupGroupByOutputType[P]>
        }
      >
    >


  export type projectgroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectgroupid?: boolean
    projecttypeid?: boolean
    projectgroupname?: boolean
    projecttitle?: boolean
    projectarea?: boolean
    projectdescription?: boolean
    averagecpi?: boolean
    description?: boolean
    convenerstaffid?: boolean
    expertstaffid?: boolean
    status?: boolean
    created?: boolean
    modified?: boolean
    staff_projectgroup_convenerstaffidTostaff?: boolean | projectgroup$staff_projectgroup_convenerstaffidTostaffArgs<ExtArgs>
    staff_projectgroup_expertstaffidTostaff?: boolean | projectgroup$staff_projectgroup_expertstaffidTostaffArgs<ExtArgs>
    projecttype?: boolean | projectgroup$projecttypeArgs<ExtArgs>
    projectgroupmember?: boolean | projectgroup$projectgroupmemberArgs<ExtArgs>
    projectmeeting?: boolean | projectgroup$projectmeetingArgs<ExtArgs>
    grade?: boolean | projectgroup$gradeArgs<ExtArgs>
    _count?: boolean | ProjectgroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectgroup"]>

  export type projectgroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectgroupid?: boolean
    projecttypeid?: boolean
    projectgroupname?: boolean
    projecttitle?: boolean
    projectarea?: boolean
    projectdescription?: boolean
    averagecpi?: boolean
    description?: boolean
    convenerstaffid?: boolean
    expertstaffid?: boolean
    status?: boolean
    created?: boolean
    modified?: boolean
    staff_projectgroup_convenerstaffidTostaff?: boolean | projectgroup$staff_projectgroup_convenerstaffidTostaffArgs<ExtArgs>
    staff_projectgroup_expertstaffidTostaff?: boolean | projectgroup$staff_projectgroup_expertstaffidTostaffArgs<ExtArgs>
    projecttype?: boolean | projectgroup$projecttypeArgs<ExtArgs>
  }, ExtArgs["result"]["projectgroup"]>

  export type projectgroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectgroupid?: boolean
    projecttypeid?: boolean
    projectgroupname?: boolean
    projecttitle?: boolean
    projectarea?: boolean
    projectdescription?: boolean
    averagecpi?: boolean
    description?: boolean
    convenerstaffid?: boolean
    expertstaffid?: boolean
    status?: boolean
    created?: boolean
    modified?: boolean
    staff_projectgroup_convenerstaffidTostaff?: boolean | projectgroup$staff_projectgroup_convenerstaffidTostaffArgs<ExtArgs>
    staff_projectgroup_expertstaffidTostaff?: boolean | projectgroup$staff_projectgroup_expertstaffidTostaffArgs<ExtArgs>
    projecttype?: boolean | projectgroup$projecttypeArgs<ExtArgs>
  }, ExtArgs["result"]["projectgroup"]>

  export type projectgroupSelectScalar = {
    projectgroupid?: boolean
    projecttypeid?: boolean
    projectgroupname?: boolean
    projecttitle?: boolean
    projectarea?: boolean
    projectdescription?: boolean
    averagecpi?: boolean
    description?: boolean
    convenerstaffid?: boolean
    expertstaffid?: boolean
    status?: boolean
    created?: boolean
    modified?: boolean
  }

  export type projectgroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"projectgroupid" | "projecttypeid" | "projectgroupname" | "projecttitle" | "projectarea" | "projectdescription" | "averagecpi" | "description" | "convenerstaffid" | "expertstaffid" | "status" | "created" | "modified", ExtArgs["result"]["projectgroup"]>
  export type projectgroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff_projectgroup_convenerstaffidTostaff?: boolean | projectgroup$staff_projectgroup_convenerstaffidTostaffArgs<ExtArgs>
    staff_projectgroup_expertstaffidTostaff?: boolean | projectgroup$staff_projectgroup_expertstaffidTostaffArgs<ExtArgs>
    projecttype?: boolean | projectgroup$projecttypeArgs<ExtArgs>
    projectgroupmember?: boolean | projectgroup$projectgroupmemberArgs<ExtArgs>
    projectmeeting?: boolean | projectgroup$projectmeetingArgs<ExtArgs>
    grade?: boolean | projectgroup$gradeArgs<ExtArgs>
    _count?: boolean | ProjectgroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type projectgroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff_projectgroup_convenerstaffidTostaff?: boolean | projectgroup$staff_projectgroup_convenerstaffidTostaffArgs<ExtArgs>
    staff_projectgroup_expertstaffidTostaff?: boolean | projectgroup$staff_projectgroup_expertstaffidTostaffArgs<ExtArgs>
    projecttype?: boolean | projectgroup$projecttypeArgs<ExtArgs>
  }
  export type projectgroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff_projectgroup_convenerstaffidTostaff?: boolean | projectgroup$staff_projectgroup_convenerstaffidTostaffArgs<ExtArgs>
    staff_projectgroup_expertstaffidTostaff?: boolean | projectgroup$staff_projectgroup_expertstaffidTostaffArgs<ExtArgs>
    projecttype?: boolean | projectgroup$projecttypeArgs<ExtArgs>
  }

  export type $projectgroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "projectgroup"
    objects: {
      staff_projectgroup_convenerstaffidTostaff: Prisma.$staffPayload<ExtArgs> | null
      staff_projectgroup_expertstaffidTostaff: Prisma.$staffPayload<ExtArgs> | null
      projecttype: Prisma.$projecttypePayload<ExtArgs> | null
      projectgroupmember: Prisma.$projectgroupmemberPayload<ExtArgs>[]
      projectmeeting: Prisma.$projectmeetingPayload<ExtArgs>[]
      grade: Prisma.$gradePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      projectgroupid: number
      projecttypeid: number | null
      projectgroupname: string | null
      projecttitle: string | null
      projectarea: string | null
      projectdescription: string | null
      averagecpi: number | null
      description: string | null
      convenerstaffid: number | null
      expertstaffid: number | null
      status: string | null
      created: Date | null
      modified: Date | null
    }, ExtArgs["result"]["projectgroup"]>
    composites: {}
  }

  type projectgroupGetPayload<S extends boolean | null | undefined | projectgroupDefaultArgs> = $Result.GetResult<Prisma.$projectgroupPayload, S>

  type projectgroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<projectgroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectgroupCountAggregateInputType | true
    }

  export interface projectgroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['projectgroup'], meta: { name: 'projectgroup' } }
    /**
     * Find zero or one Projectgroup that matches the filter.
     * @param {projectgroupFindUniqueArgs} args - Arguments to find a Projectgroup
     * @example
     * // Get one Projectgroup
     * const projectgroup = await prisma.projectgroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectgroupFindUniqueArgs>(args: SelectSubset<T, projectgroupFindUniqueArgs<ExtArgs>>): Prisma__projectgroupClient<$Result.GetResult<Prisma.$projectgroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Projectgroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {projectgroupFindUniqueOrThrowArgs} args - Arguments to find a Projectgroup
     * @example
     * // Get one Projectgroup
     * const projectgroup = await prisma.projectgroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectgroupFindUniqueOrThrowArgs>(args: SelectSubset<T, projectgroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectgroupClient<$Result.GetResult<Prisma.$projectgroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projectgroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectgroupFindFirstArgs} args - Arguments to find a Projectgroup
     * @example
     * // Get one Projectgroup
     * const projectgroup = await prisma.projectgroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectgroupFindFirstArgs>(args?: SelectSubset<T, projectgroupFindFirstArgs<ExtArgs>>): Prisma__projectgroupClient<$Result.GetResult<Prisma.$projectgroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projectgroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectgroupFindFirstOrThrowArgs} args - Arguments to find a Projectgroup
     * @example
     * // Get one Projectgroup
     * const projectgroup = await prisma.projectgroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectgroupFindFirstOrThrowArgs>(args?: SelectSubset<T, projectgroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectgroupClient<$Result.GetResult<Prisma.$projectgroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projectgroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectgroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projectgroups
     * const projectgroups = await prisma.projectgroup.findMany()
     * 
     * // Get first 10 Projectgroups
     * const projectgroups = await prisma.projectgroup.findMany({ take: 10 })
     * 
     * // Only select the `projectgroupid`
     * const projectgroupWithProjectgroupidOnly = await prisma.projectgroup.findMany({ select: { projectgroupid: true } })
     * 
     */
    findMany<T extends projectgroupFindManyArgs>(args?: SelectSubset<T, projectgroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectgroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Projectgroup.
     * @param {projectgroupCreateArgs} args - Arguments to create a Projectgroup.
     * @example
     * // Create one Projectgroup
     * const Projectgroup = await prisma.projectgroup.create({
     *   data: {
     *     // ... data to create a Projectgroup
     *   }
     * })
     * 
     */
    create<T extends projectgroupCreateArgs>(args: SelectSubset<T, projectgroupCreateArgs<ExtArgs>>): Prisma__projectgroupClient<$Result.GetResult<Prisma.$projectgroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projectgroups.
     * @param {projectgroupCreateManyArgs} args - Arguments to create many Projectgroups.
     * @example
     * // Create many Projectgroups
     * const projectgroup = await prisma.projectgroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projectgroupCreateManyArgs>(args?: SelectSubset<T, projectgroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projectgroups and returns the data saved in the database.
     * @param {projectgroupCreateManyAndReturnArgs} args - Arguments to create many Projectgroups.
     * @example
     * // Create many Projectgroups
     * const projectgroup = await prisma.projectgroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projectgroups and only return the `projectgroupid`
     * const projectgroupWithProjectgroupidOnly = await prisma.projectgroup.createManyAndReturn({
     *   select: { projectgroupid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends projectgroupCreateManyAndReturnArgs>(args?: SelectSubset<T, projectgroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectgroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Projectgroup.
     * @param {projectgroupDeleteArgs} args - Arguments to delete one Projectgroup.
     * @example
     * // Delete one Projectgroup
     * const Projectgroup = await prisma.projectgroup.delete({
     *   where: {
     *     // ... filter to delete one Projectgroup
     *   }
     * })
     * 
     */
    delete<T extends projectgroupDeleteArgs>(args: SelectSubset<T, projectgroupDeleteArgs<ExtArgs>>): Prisma__projectgroupClient<$Result.GetResult<Prisma.$projectgroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Projectgroup.
     * @param {projectgroupUpdateArgs} args - Arguments to update one Projectgroup.
     * @example
     * // Update one Projectgroup
     * const projectgroup = await prisma.projectgroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projectgroupUpdateArgs>(args: SelectSubset<T, projectgroupUpdateArgs<ExtArgs>>): Prisma__projectgroupClient<$Result.GetResult<Prisma.$projectgroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projectgroups.
     * @param {projectgroupDeleteManyArgs} args - Arguments to filter Projectgroups to delete.
     * @example
     * // Delete a few Projectgroups
     * const { count } = await prisma.projectgroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projectgroupDeleteManyArgs>(args?: SelectSubset<T, projectgroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projectgroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectgroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projectgroups
     * const projectgroup = await prisma.projectgroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projectgroupUpdateManyArgs>(args: SelectSubset<T, projectgroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projectgroups and returns the data updated in the database.
     * @param {projectgroupUpdateManyAndReturnArgs} args - Arguments to update many Projectgroups.
     * @example
     * // Update many Projectgroups
     * const projectgroup = await prisma.projectgroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projectgroups and only return the `projectgroupid`
     * const projectgroupWithProjectgroupidOnly = await prisma.projectgroup.updateManyAndReturn({
     *   select: { projectgroupid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends projectgroupUpdateManyAndReturnArgs>(args: SelectSubset<T, projectgroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectgroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Projectgroup.
     * @param {projectgroupUpsertArgs} args - Arguments to update or create a Projectgroup.
     * @example
     * // Update or create a Projectgroup
     * const projectgroup = await prisma.projectgroup.upsert({
     *   create: {
     *     // ... data to create a Projectgroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projectgroup we want to update
     *   }
     * })
     */
    upsert<T extends projectgroupUpsertArgs>(args: SelectSubset<T, projectgroupUpsertArgs<ExtArgs>>): Prisma__projectgroupClient<$Result.GetResult<Prisma.$projectgroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projectgroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectgroupCountArgs} args - Arguments to filter Projectgroups to count.
     * @example
     * // Count the number of Projectgroups
     * const count = await prisma.projectgroup.count({
     *   where: {
     *     // ... the filter for the Projectgroups we want to count
     *   }
     * })
    **/
    count<T extends projectgroupCountArgs>(
      args?: Subset<T, projectgroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectgroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projectgroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectgroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectgroupAggregateArgs>(args: Subset<T, ProjectgroupAggregateArgs>): Prisma.PrismaPromise<GetProjectgroupAggregateType<T>>

    /**
     * Group by Projectgroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectgroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends projectgroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectgroupGroupByArgs['orderBy'] }
        : { orderBy?: projectgroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, projectgroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectgroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the projectgroup model
   */
  readonly fields: projectgroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for projectgroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectgroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    staff_projectgroup_convenerstaffidTostaff<T extends projectgroup$staff_projectgroup_convenerstaffidTostaffArgs<ExtArgs> = {}>(args?: Subset<T, projectgroup$staff_projectgroup_convenerstaffidTostaffArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    staff_projectgroup_expertstaffidTostaff<T extends projectgroup$staff_projectgroup_expertstaffidTostaffArgs<ExtArgs> = {}>(args?: Subset<T, projectgroup$staff_projectgroup_expertstaffidTostaffArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    projecttype<T extends projectgroup$projecttypeArgs<ExtArgs> = {}>(args?: Subset<T, projectgroup$projecttypeArgs<ExtArgs>>): Prisma__projecttypeClient<$Result.GetResult<Prisma.$projecttypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    projectgroupmember<T extends projectgroup$projectgroupmemberArgs<ExtArgs> = {}>(args?: Subset<T, projectgroup$projectgroupmemberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectgroupmemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectmeeting<T extends projectgroup$projectmeetingArgs<ExtArgs> = {}>(args?: Subset<T, projectgroup$projectmeetingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectmeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    grade<T extends projectgroup$gradeArgs<ExtArgs> = {}>(args?: Subset<T, projectgroup$gradeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the projectgroup model
   */
  interface projectgroupFieldRefs {
    readonly projectgroupid: FieldRef<"projectgroup", 'Int'>
    readonly projecttypeid: FieldRef<"projectgroup", 'Int'>
    readonly projectgroupname: FieldRef<"projectgroup", 'String'>
    readonly projecttitle: FieldRef<"projectgroup", 'String'>
    readonly projectarea: FieldRef<"projectgroup", 'String'>
    readonly projectdescription: FieldRef<"projectgroup", 'String'>
    readonly averagecpi: FieldRef<"projectgroup", 'Float'>
    readonly description: FieldRef<"projectgroup", 'String'>
    readonly convenerstaffid: FieldRef<"projectgroup", 'Int'>
    readonly expertstaffid: FieldRef<"projectgroup", 'Int'>
    readonly status: FieldRef<"projectgroup", 'String'>
    readonly created: FieldRef<"projectgroup", 'DateTime'>
    readonly modified: FieldRef<"projectgroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * projectgroup findUnique
   */
  export type projectgroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectgroup
     */
    select?: projectgroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectgroup
     */
    omit?: projectgroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectgroupInclude<ExtArgs> | null
    /**
     * Filter, which projectgroup to fetch.
     */
    where: projectgroupWhereUniqueInput
  }

  /**
   * projectgroup findUniqueOrThrow
   */
  export type projectgroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectgroup
     */
    select?: projectgroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectgroup
     */
    omit?: projectgroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectgroupInclude<ExtArgs> | null
    /**
     * Filter, which projectgroup to fetch.
     */
    where: projectgroupWhereUniqueInput
  }

  /**
   * projectgroup findFirst
   */
  export type projectgroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectgroup
     */
    select?: projectgroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectgroup
     */
    omit?: projectgroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectgroupInclude<ExtArgs> | null
    /**
     * Filter, which projectgroup to fetch.
     */
    where?: projectgroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projectgroups to fetch.
     */
    orderBy?: projectgroupOrderByWithRelationInput | projectgroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projectgroups.
     */
    cursor?: projectgroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projectgroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projectgroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projectgroups.
     */
    distinct?: ProjectgroupScalarFieldEnum | ProjectgroupScalarFieldEnum[]
  }

  /**
   * projectgroup findFirstOrThrow
   */
  export type projectgroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectgroup
     */
    select?: projectgroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectgroup
     */
    omit?: projectgroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectgroupInclude<ExtArgs> | null
    /**
     * Filter, which projectgroup to fetch.
     */
    where?: projectgroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projectgroups to fetch.
     */
    orderBy?: projectgroupOrderByWithRelationInput | projectgroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projectgroups.
     */
    cursor?: projectgroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projectgroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projectgroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projectgroups.
     */
    distinct?: ProjectgroupScalarFieldEnum | ProjectgroupScalarFieldEnum[]
  }

  /**
   * projectgroup findMany
   */
  export type projectgroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectgroup
     */
    select?: projectgroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectgroup
     */
    omit?: projectgroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectgroupInclude<ExtArgs> | null
    /**
     * Filter, which projectgroups to fetch.
     */
    where?: projectgroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projectgroups to fetch.
     */
    orderBy?: projectgroupOrderByWithRelationInput | projectgroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projectgroups.
     */
    cursor?: projectgroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projectgroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projectgroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projectgroups.
     */
    distinct?: ProjectgroupScalarFieldEnum | ProjectgroupScalarFieldEnum[]
  }

  /**
   * projectgroup create
   */
  export type projectgroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectgroup
     */
    select?: projectgroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectgroup
     */
    omit?: projectgroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectgroupInclude<ExtArgs> | null
    /**
     * The data needed to create a projectgroup.
     */
    data?: XOR<projectgroupCreateInput, projectgroupUncheckedCreateInput>
  }

  /**
   * projectgroup createMany
   */
  export type projectgroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projectgroups.
     */
    data: projectgroupCreateManyInput | projectgroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * projectgroup createManyAndReturn
   */
  export type projectgroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectgroup
     */
    select?: projectgroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projectgroup
     */
    omit?: projectgroupOmit<ExtArgs> | null
    /**
     * The data used to create many projectgroups.
     */
    data: projectgroupCreateManyInput | projectgroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectgroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * projectgroup update
   */
  export type projectgroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectgroup
     */
    select?: projectgroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectgroup
     */
    omit?: projectgroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectgroupInclude<ExtArgs> | null
    /**
     * The data needed to update a projectgroup.
     */
    data: XOR<projectgroupUpdateInput, projectgroupUncheckedUpdateInput>
    /**
     * Choose, which projectgroup to update.
     */
    where: projectgroupWhereUniqueInput
  }

  /**
   * projectgroup updateMany
   */
  export type projectgroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projectgroups.
     */
    data: XOR<projectgroupUpdateManyMutationInput, projectgroupUncheckedUpdateManyInput>
    /**
     * Filter which projectgroups to update
     */
    where?: projectgroupWhereInput
    /**
     * Limit how many projectgroups to update.
     */
    limit?: number
  }

  /**
   * projectgroup updateManyAndReturn
   */
  export type projectgroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectgroup
     */
    select?: projectgroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projectgroup
     */
    omit?: projectgroupOmit<ExtArgs> | null
    /**
     * The data used to update projectgroups.
     */
    data: XOR<projectgroupUpdateManyMutationInput, projectgroupUncheckedUpdateManyInput>
    /**
     * Filter which projectgroups to update
     */
    where?: projectgroupWhereInput
    /**
     * Limit how many projectgroups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectgroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * projectgroup upsert
   */
  export type projectgroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectgroup
     */
    select?: projectgroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectgroup
     */
    omit?: projectgroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectgroupInclude<ExtArgs> | null
    /**
     * The filter to search for the projectgroup to update in case it exists.
     */
    where: projectgroupWhereUniqueInput
    /**
     * In case the projectgroup found by the `where` argument doesn't exist, create a new projectgroup with this data.
     */
    create: XOR<projectgroupCreateInput, projectgroupUncheckedCreateInput>
    /**
     * In case the projectgroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectgroupUpdateInput, projectgroupUncheckedUpdateInput>
  }

  /**
   * projectgroup delete
   */
  export type projectgroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectgroup
     */
    select?: projectgroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectgroup
     */
    omit?: projectgroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectgroupInclude<ExtArgs> | null
    /**
     * Filter which projectgroup to delete.
     */
    where: projectgroupWhereUniqueInput
  }

  /**
   * projectgroup deleteMany
   */
  export type projectgroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projectgroups to delete
     */
    where?: projectgroupWhereInput
    /**
     * Limit how many projectgroups to delete.
     */
    limit?: number
  }

  /**
   * projectgroup.staff_projectgroup_convenerstaffidTostaff
   */
  export type projectgroup$staff_projectgroup_convenerstaffidTostaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    where?: staffWhereInput
  }

  /**
   * projectgroup.staff_projectgroup_expertstaffidTostaff
   */
  export type projectgroup$staff_projectgroup_expertstaffidTostaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    where?: staffWhereInput
  }

  /**
   * projectgroup.projecttype
   */
  export type projectgroup$projecttypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projecttype
     */
    select?: projecttypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projecttype
     */
    omit?: projecttypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projecttypeInclude<ExtArgs> | null
    where?: projecttypeWhereInput
  }

  /**
   * projectgroup.projectgroupmember
   */
  export type projectgroup$projectgroupmemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectgroupmember
     */
    select?: projectgroupmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectgroupmember
     */
    omit?: projectgroupmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectgroupmemberInclude<ExtArgs> | null
    where?: projectgroupmemberWhereInput
    orderBy?: projectgroupmemberOrderByWithRelationInput | projectgroupmemberOrderByWithRelationInput[]
    cursor?: projectgroupmemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectgroupmemberScalarFieldEnum | ProjectgroupmemberScalarFieldEnum[]
  }

  /**
   * projectgroup.projectmeeting
   */
  export type projectgroup$projectmeetingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmeeting
     */
    select?: projectmeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectmeeting
     */
    omit?: projectmeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmeetingInclude<ExtArgs> | null
    where?: projectmeetingWhereInput
    orderBy?: projectmeetingOrderByWithRelationInput | projectmeetingOrderByWithRelationInput[]
    cursor?: projectmeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectmeetingScalarFieldEnum | ProjectmeetingScalarFieldEnum[]
  }

  /**
   * projectgroup.grade
   */
  export type projectgroup$gradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grade
     */
    omit?: gradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gradeInclude<ExtArgs> | null
    where?: gradeWhereInput
    orderBy?: gradeOrderByWithRelationInput | gradeOrderByWithRelationInput[]
    cursor?: gradeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * projectgroup without action
   */
  export type projectgroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectgroup
     */
    select?: projectgroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectgroup
     */
    omit?: projectgroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectgroupInclude<ExtArgs> | null
  }


  /**
   * Model grouprequest
   */

  export type AggregateGrouprequest = {
    _count: GrouprequestCountAggregateOutputType | null
    _avg: GrouprequestAvgAggregateOutputType | null
    _sum: GrouprequestSumAggregateOutputType | null
    _min: GrouprequestMinAggregateOutputType | null
    _max: GrouprequestMaxAggregateOutputType | null
  }

  export type GrouprequestAvgAggregateOutputType = {
    requestid: number | null
    leaderid: number | null
    approvedby: number | null
  }

  export type GrouprequestSumAggregateOutputType = {
    requestid: number | null
    leaderid: number | null
    approvedby: number | null
  }

  export type GrouprequestMinAggregateOutputType = {
    requestid: number | null
    groupname: string | null
    projecttitle: string | null
    projectarea: string | null
    projectdescription: string | null
    technologies: string | null
    leaderid: number | null
    memberdata: string | null
    status: string | null
    rejectionreason: string | null
    created: Date | null
    modified: Date | null
    approvedby: number | null
  }

  export type GrouprequestMaxAggregateOutputType = {
    requestid: number | null
    groupname: string | null
    projecttitle: string | null
    projectarea: string | null
    projectdescription: string | null
    technologies: string | null
    leaderid: number | null
    memberdata: string | null
    status: string | null
    rejectionreason: string | null
    created: Date | null
    modified: Date | null
    approvedby: number | null
  }

  export type GrouprequestCountAggregateOutputType = {
    requestid: number
    groupname: number
    projecttitle: number
    projectarea: number
    projectdescription: number
    technologies: number
    leaderid: number
    memberdata: number
    status: number
    rejectionreason: number
    created: number
    modified: number
    approvedby: number
    _all: number
  }


  export type GrouprequestAvgAggregateInputType = {
    requestid?: true
    leaderid?: true
    approvedby?: true
  }

  export type GrouprequestSumAggregateInputType = {
    requestid?: true
    leaderid?: true
    approvedby?: true
  }

  export type GrouprequestMinAggregateInputType = {
    requestid?: true
    groupname?: true
    projecttitle?: true
    projectarea?: true
    projectdescription?: true
    technologies?: true
    leaderid?: true
    memberdata?: true
    status?: true
    rejectionreason?: true
    created?: true
    modified?: true
    approvedby?: true
  }

  export type GrouprequestMaxAggregateInputType = {
    requestid?: true
    groupname?: true
    projecttitle?: true
    projectarea?: true
    projectdescription?: true
    technologies?: true
    leaderid?: true
    memberdata?: true
    status?: true
    rejectionreason?: true
    created?: true
    modified?: true
    approvedby?: true
  }

  export type GrouprequestCountAggregateInputType = {
    requestid?: true
    groupname?: true
    projecttitle?: true
    projectarea?: true
    projectdescription?: true
    technologies?: true
    leaderid?: true
    memberdata?: true
    status?: true
    rejectionreason?: true
    created?: true
    modified?: true
    approvedby?: true
    _all?: true
  }

  export type GrouprequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which grouprequest to aggregate.
     */
    where?: grouprequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grouprequests to fetch.
     */
    orderBy?: grouprequestOrderByWithRelationInput | grouprequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: grouprequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grouprequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grouprequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned grouprequests
    **/
    _count?: true | GrouprequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GrouprequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GrouprequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GrouprequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GrouprequestMaxAggregateInputType
  }

  export type GetGrouprequestAggregateType<T extends GrouprequestAggregateArgs> = {
        [P in keyof T & keyof AggregateGrouprequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrouprequest[P]>
      : GetScalarType<T[P], AggregateGrouprequest[P]>
  }




  export type grouprequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: grouprequestWhereInput
    orderBy?: grouprequestOrderByWithAggregationInput | grouprequestOrderByWithAggregationInput[]
    by: GrouprequestScalarFieldEnum[] | GrouprequestScalarFieldEnum
    having?: grouprequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GrouprequestCountAggregateInputType | true
    _avg?: GrouprequestAvgAggregateInputType
    _sum?: GrouprequestSumAggregateInputType
    _min?: GrouprequestMinAggregateInputType
    _max?: GrouprequestMaxAggregateInputType
  }

  export type GrouprequestGroupByOutputType = {
    requestid: number
    groupname: string
    projecttitle: string
    projectarea: string | null
    projectdescription: string | null
    technologies: string | null
    leaderid: number
    memberdata: string
    status: string
    rejectionreason: string | null
    created: Date
    modified: Date
    approvedby: number | null
    _count: GrouprequestCountAggregateOutputType | null
    _avg: GrouprequestAvgAggregateOutputType | null
    _sum: GrouprequestSumAggregateOutputType | null
    _min: GrouprequestMinAggregateOutputType | null
    _max: GrouprequestMaxAggregateOutputType | null
  }

  type GetGrouprequestGroupByPayload<T extends grouprequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GrouprequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GrouprequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GrouprequestGroupByOutputType[P]>
            : GetScalarType<T[P], GrouprequestGroupByOutputType[P]>
        }
      >
    >


  export type grouprequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    requestid?: boolean
    groupname?: boolean
    projecttitle?: boolean
    projectarea?: boolean
    projectdescription?: boolean
    technologies?: boolean
    leaderid?: boolean
    memberdata?: boolean
    status?: boolean
    rejectionreason?: boolean
    created?: boolean
    modified?: boolean
    approvedby?: boolean
    leader?: boolean | studentDefaultArgs<ExtArgs>
    approver?: boolean | grouprequest$approverArgs<ExtArgs>
  }, ExtArgs["result"]["grouprequest"]>

  export type grouprequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    requestid?: boolean
    groupname?: boolean
    projecttitle?: boolean
    projectarea?: boolean
    projectdescription?: boolean
    technologies?: boolean
    leaderid?: boolean
    memberdata?: boolean
    status?: boolean
    rejectionreason?: boolean
    created?: boolean
    modified?: boolean
    approvedby?: boolean
    leader?: boolean | studentDefaultArgs<ExtArgs>
    approver?: boolean | grouprequest$approverArgs<ExtArgs>
  }, ExtArgs["result"]["grouprequest"]>

  export type grouprequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    requestid?: boolean
    groupname?: boolean
    projecttitle?: boolean
    projectarea?: boolean
    projectdescription?: boolean
    technologies?: boolean
    leaderid?: boolean
    memberdata?: boolean
    status?: boolean
    rejectionreason?: boolean
    created?: boolean
    modified?: boolean
    approvedby?: boolean
    leader?: boolean | studentDefaultArgs<ExtArgs>
    approver?: boolean | grouprequest$approverArgs<ExtArgs>
  }, ExtArgs["result"]["grouprequest"]>

  export type grouprequestSelectScalar = {
    requestid?: boolean
    groupname?: boolean
    projecttitle?: boolean
    projectarea?: boolean
    projectdescription?: boolean
    technologies?: boolean
    leaderid?: boolean
    memberdata?: boolean
    status?: boolean
    rejectionreason?: boolean
    created?: boolean
    modified?: boolean
    approvedby?: boolean
  }

  export type grouprequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"requestid" | "groupname" | "projecttitle" | "projectarea" | "projectdescription" | "technologies" | "leaderid" | "memberdata" | "status" | "rejectionreason" | "created" | "modified" | "approvedby", ExtArgs["result"]["grouprequest"]>
  export type grouprequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leader?: boolean | studentDefaultArgs<ExtArgs>
    approver?: boolean | grouprequest$approverArgs<ExtArgs>
  }
  export type grouprequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leader?: boolean | studentDefaultArgs<ExtArgs>
    approver?: boolean | grouprequest$approverArgs<ExtArgs>
  }
  export type grouprequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leader?: boolean | studentDefaultArgs<ExtArgs>
    approver?: boolean | grouprequest$approverArgs<ExtArgs>
  }

  export type $grouprequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "grouprequest"
    objects: {
      leader: Prisma.$studentPayload<ExtArgs>
      approver: Prisma.$staffPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      requestid: number
      groupname: string
      projecttitle: string
      projectarea: string | null
      projectdescription: string | null
      technologies: string | null
      leaderid: number
      memberdata: string
      status: string
      rejectionreason: string | null
      created: Date
      modified: Date
      approvedby: number | null
    }, ExtArgs["result"]["grouprequest"]>
    composites: {}
  }

  type grouprequestGetPayload<S extends boolean | null | undefined | grouprequestDefaultArgs> = $Result.GetResult<Prisma.$grouprequestPayload, S>

  type grouprequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<grouprequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GrouprequestCountAggregateInputType | true
    }

  export interface grouprequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['grouprequest'], meta: { name: 'grouprequest' } }
    /**
     * Find zero or one Grouprequest that matches the filter.
     * @param {grouprequestFindUniqueArgs} args - Arguments to find a Grouprequest
     * @example
     * // Get one Grouprequest
     * const grouprequest = await prisma.grouprequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends grouprequestFindUniqueArgs>(args: SelectSubset<T, grouprequestFindUniqueArgs<ExtArgs>>): Prisma__grouprequestClient<$Result.GetResult<Prisma.$grouprequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Grouprequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {grouprequestFindUniqueOrThrowArgs} args - Arguments to find a Grouprequest
     * @example
     * // Get one Grouprequest
     * const grouprequest = await prisma.grouprequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends grouprequestFindUniqueOrThrowArgs>(args: SelectSubset<T, grouprequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__grouprequestClient<$Result.GetResult<Prisma.$grouprequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grouprequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grouprequestFindFirstArgs} args - Arguments to find a Grouprequest
     * @example
     * // Get one Grouprequest
     * const grouprequest = await prisma.grouprequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends grouprequestFindFirstArgs>(args?: SelectSubset<T, grouprequestFindFirstArgs<ExtArgs>>): Prisma__grouprequestClient<$Result.GetResult<Prisma.$grouprequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grouprequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grouprequestFindFirstOrThrowArgs} args - Arguments to find a Grouprequest
     * @example
     * // Get one Grouprequest
     * const grouprequest = await prisma.grouprequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends grouprequestFindFirstOrThrowArgs>(args?: SelectSubset<T, grouprequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__grouprequestClient<$Result.GetResult<Prisma.$grouprequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Grouprequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grouprequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Grouprequests
     * const grouprequests = await prisma.grouprequest.findMany()
     * 
     * // Get first 10 Grouprequests
     * const grouprequests = await prisma.grouprequest.findMany({ take: 10 })
     * 
     * // Only select the `requestid`
     * const grouprequestWithRequestidOnly = await prisma.grouprequest.findMany({ select: { requestid: true } })
     * 
     */
    findMany<T extends grouprequestFindManyArgs>(args?: SelectSubset<T, grouprequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$grouprequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Grouprequest.
     * @param {grouprequestCreateArgs} args - Arguments to create a Grouprequest.
     * @example
     * // Create one Grouprequest
     * const Grouprequest = await prisma.grouprequest.create({
     *   data: {
     *     // ... data to create a Grouprequest
     *   }
     * })
     * 
     */
    create<T extends grouprequestCreateArgs>(args: SelectSubset<T, grouprequestCreateArgs<ExtArgs>>): Prisma__grouprequestClient<$Result.GetResult<Prisma.$grouprequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Grouprequests.
     * @param {grouprequestCreateManyArgs} args - Arguments to create many Grouprequests.
     * @example
     * // Create many Grouprequests
     * const grouprequest = await prisma.grouprequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends grouprequestCreateManyArgs>(args?: SelectSubset<T, grouprequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Grouprequests and returns the data saved in the database.
     * @param {grouprequestCreateManyAndReturnArgs} args - Arguments to create many Grouprequests.
     * @example
     * // Create many Grouprequests
     * const grouprequest = await prisma.grouprequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Grouprequests and only return the `requestid`
     * const grouprequestWithRequestidOnly = await prisma.grouprequest.createManyAndReturn({
     *   select: { requestid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends grouprequestCreateManyAndReturnArgs>(args?: SelectSubset<T, grouprequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$grouprequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Grouprequest.
     * @param {grouprequestDeleteArgs} args - Arguments to delete one Grouprequest.
     * @example
     * // Delete one Grouprequest
     * const Grouprequest = await prisma.grouprequest.delete({
     *   where: {
     *     // ... filter to delete one Grouprequest
     *   }
     * })
     * 
     */
    delete<T extends grouprequestDeleteArgs>(args: SelectSubset<T, grouprequestDeleteArgs<ExtArgs>>): Prisma__grouprequestClient<$Result.GetResult<Prisma.$grouprequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Grouprequest.
     * @param {grouprequestUpdateArgs} args - Arguments to update one Grouprequest.
     * @example
     * // Update one Grouprequest
     * const grouprequest = await prisma.grouprequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends grouprequestUpdateArgs>(args: SelectSubset<T, grouprequestUpdateArgs<ExtArgs>>): Prisma__grouprequestClient<$Result.GetResult<Prisma.$grouprequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Grouprequests.
     * @param {grouprequestDeleteManyArgs} args - Arguments to filter Grouprequests to delete.
     * @example
     * // Delete a few Grouprequests
     * const { count } = await prisma.grouprequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends grouprequestDeleteManyArgs>(args?: SelectSubset<T, grouprequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grouprequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grouprequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Grouprequests
     * const grouprequest = await prisma.grouprequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends grouprequestUpdateManyArgs>(args: SelectSubset<T, grouprequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grouprequests and returns the data updated in the database.
     * @param {grouprequestUpdateManyAndReturnArgs} args - Arguments to update many Grouprequests.
     * @example
     * // Update many Grouprequests
     * const grouprequest = await prisma.grouprequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Grouprequests and only return the `requestid`
     * const grouprequestWithRequestidOnly = await prisma.grouprequest.updateManyAndReturn({
     *   select: { requestid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends grouprequestUpdateManyAndReturnArgs>(args: SelectSubset<T, grouprequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$grouprequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Grouprequest.
     * @param {grouprequestUpsertArgs} args - Arguments to update or create a Grouprequest.
     * @example
     * // Update or create a Grouprequest
     * const grouprequest = await prisma.grouprequest.upsert({
     *   create: {
     *     // ... data to create a Grouprequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Grouprequest we want to update
     *   }
     * })
     */
    upsert<T extends grouprequestUpsertArgs>(args: SelectSubset<T, grouprequestUpsertArgs<ExtArgs>>): Prisma__grouprequestClient<$Result.GetResult<Prisma.$grouprequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Grouprequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grouprequestCountArgs} args - Arguments to filter Grouprequests to count.
     * @example
     * // Count the number of Grouprequests
     * const count = await prisma.grouprequest.count({
     *   where: {
     *     // ... the filter for the Grouprequests we want to count
     *   }
     * })
    **/
    count<T extends grouprequestCountArgs>(
      args?: Subset<T, grouprequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GrouprequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Grouprequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrouprequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GrouprequestAggregateArgs>(args: Subset<T, GrouprequestAggregateArgs>): Prisma.PrismaPromise<GetGrouprequestAggregateType<T>>

    /**
     * Group by Grouprequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {grouprequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends grouprequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: grouprequestGroupByArgs['orderBy'] }
        : { orderBy?: grouprequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, grouprequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGrouprequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the grouprequest model
   */
  readonly fields: grouprequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for grouprequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__grouprequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leader<T extends studentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, studentDefaultArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    approver<T extends grouprequest$approverArgs<ExtArgs> = {}>(args?: Subset<T, grouprequest$approverArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the grouprequest model
   */
  interface grouprequestFieldRefs {
    readonly requestid: FieldRef<"grouprequest", 'Int'>
    readonly groupname: FieldRef<"grouprequest", 'String'>
    readonly projecttitle: FieldRef<"grouprequest", 'String'>
    readonly projectarea: FieldRef<"grouprequest", 'String'>
    readonly projectdescription: FieldRef<"grouprequest", 'String'>
    readonly technologies: FieldRef<"grouprequest", 'String'>
    readonly leaderid: FieldRef<"grouprequest", 'Int'>
    readonly memberdata: FieldRef<"grouprequest", 'String'>
    readonly status: FieldRef<"grouprequest", 'String'>
    readonly rejectionreason: FieldRef<"grouprequest", 'String'>
    readonly created: FieldRef<"grouprequest", 'DateTime'>
    readonly modified: FieldRef<"grouprequest", 'DateTime'>
    readonly approvedby: FieldRef<"grouprequest", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * grouprequest findUnique
   */
  export type grouprequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grouprequest
     */
    select?: grouprequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grouprequest
     */
    omit?: grouprequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grouprequestInclude<ExtArgs> | null
    /**
     * Filter, which grouprequest to fetch.
     */
    where: grouprequestWhereUniqueInput
  }

  /**
   * grouprequest findUniqueOrThrow
   */
  export type grouprequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grouprequest
     */
    select?: grouprequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grouprequest
     */
    omit?: grouprequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grouprequestInclude<ExtArgs> | null
    /**
     * Filter, which grouprequest to fetch.
     */
    where: grouprequestWhereUniqueInput
  }

  /**
   * grouprequest findFirst
   */
  export type grouprequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grouprequest
     */
    select?: grouprequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grouprequest
     */
    omit?: grouprequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grouprequestInclude<ExtArgs> | null
    /**
     * Filter, which grouprequest to fetch.
     */
    where?: grouprequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grouprequests to fetch.
     */
    orderBy?: grouprequestOrderByWithRelationInput | grouprequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for grouprequests.
     */
    cursor?: grouprequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grouprequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grouprequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of grouprequests.
     */
    distinct?: GrouprequestScalarFieldEnum | GrouprequestScalarFieldEnum[]
  }

  /**
   * grouprequest findFirstOrThrow
   */
  export type grouprequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grouprequest
     */
    select?: grouprequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grouprequest
     */
    omit?: grouprequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grouprequestInclude<ExtArgs> | null
    /**
     * Filter, which grouprequest to fetch.
     */
    where?: grouprequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grouprequests to fetch.
     */
    orderBy?: grouprequestOrderByWithRelationInput | grouprequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for grouprequests.
     */
    cursor?: grouprequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grouprequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grouprequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of grouprequests.
     */
    distinct?: GrouprequestScalarFieldEnum | GrouprequestScalarFieldEnum[]
  }

  /**
   * grouprequest findMany
   */
  export type grouprequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grouprequest
     */
    select?: grouprequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grouprequest
     */
    omit?: grouprequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grouprequestInclude<ExtArgs> | null
    /**
     * Filter, which grouprequests to fetch.
     */
    where?: grouprequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grouprequests to fetch.
     */
    orderBy?: grouprequestOrderByWithRelationInput | grouprequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing grouprequests.
     */
    cursor?: grouprequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grouprequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grouprequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of grouprequests.
     */
    distinct?: GrouprequestScalarFieldEnum | GrouprequestScalarFieldEnum[]
  }

  /**
   * grouprequest create
   */
  export type grouprequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grouprequest
     */
    select?: grouprequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grouprequest
     */
    omit?: grouprequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grouprequestInclude<ExtArgs> | null
    /**
     * The data needed to create a grouprequest.
     */
    data: XOR<grouprequestCreateInput, grouprequestUncheckedCreateInput>
  }

  /**
   * grouprequest createMany
   */
  export type grouprequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many grouprequests.
     */
    data: grouprequestCreateManyInput | grouprequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * grouprequest createManyAndReturn
   */
  export type grouprequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grouprequest
     */
    select?: grouprequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the grouprequest
     */
    omit?: grouprequestOmit<ExtArgs> | null
    /**
     * The data used to create many grouprequests.
     */
    data: grouprequestCreateManyInput | grouprequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grouprequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * grouprequest update
   */
  export type grouprequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grouprequest
     */
    select?: grouprequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grouprequest
     */
    omit?: grouprequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grouprequestInclude<ExtArgs> | null
    /**
     * The data needed to update a grouprequest.
     */
    data: XOR<grouprequestUpdateInput, grouprequestUncheckedUpdateInput>
    /**
     * Choose, which grouprequest to update.
     */
    where: grouprequestWhereUniqueInput
  }

  /**
   * grouprequest updateMany
   */
  export type grouprequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update grouprequests.
     */
    data: XOR<grouprequestUpdateManyMutationInput, grouprequestUncheckedUpdateManyInput>
    /**
     * Filter which grouprequests to update
     */
    where?: grouprequestWhereInput
    /**
     * Limit how many grouprequests to update.
     */
    limit?: number
  }

  /**
   * grouprequest updateManyAndReturn
   */
  export type grouprequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grouprequest
     */
    select?: grouprequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the grouprequest
     */
    omit?: grouprequestOmit<ExtArgs> | null
    /**
     * The data used to update grouprequests.
     */
    data: XOR<grouprequestUpdateManyMutationInput, grouprequestUncheckedUpdateManyInput>
    /**
     * Filter which grouprequests to update
     */
    where?: grouprequestWhereInput
    /**
     * Limit how many grouprequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grouprequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * grouprequest upsert
   */
  export type grouprequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grouprequest
     */
    select?: grouprequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grouprequest
     */
    omit?: grouprequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grouprequestInclude<ExtArgs> | null
    /**
     * The filter to search for the grouprequest to update in case it exists.
     */
    where: grouprequestWhereUniqueInput
    /**
     * In case the grouprequest found by the `where` argument doesn't exist, create a new grouprequest with this data.
     */
    create: XOR<grouprequestCreateInput, grouprequestUncheckedCreateInput>
    /**
     * In case the grouprequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<grouprequestUpdateInput, grouprequestUncheckedUpdateInput>
  }

  /**
   * grouprequest delete
   */
  export type grouprequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grouprequest
     */
    select?: grouprequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grouprequest
     */
    omit?: grouprequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grouprequestInclude<ExtArgs> | null
    /**
     * Filter which grouprequest to delete.
     */
    where: grouprequestWhereUniqueInput
  }

  /**
   * grouprequest deleteMany
   */
  export type grouprequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which grouprequests to delete
     */
    where?: grouprequestWhereInput
    /**
     * Limit how many grouprequests to delete.
     */
    limit?: number
  }

  /**
   * grouprequest.approver
   */
  export type grouprequest$approverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    where?: staffWhereInput
  }

  /**
   * grouprequest without action
   */
  export type grouprequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grouprequest
     */
    select?: grouprequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grouprequest
     */
    omit?: grouprequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grouprequestInclude<ExtArgs> | null
  }


  /**
   * Model projectgroupmember
   */

  export type AggregateProjectgroupmember = {
    _count: ProjectgroupmemberCountAggregateOutputType | null
    _avg: ProjectgroupmemberAvgAggregateOutputType | null
    _sum: ProjectgroupmemberSumAggregateOutputType | null
    _min: ProjectgroupmemberMinAggregateOutputType | null
    _max: ProjectgroupmemberMaxAggregateOutputType | null
  }

  export type ProjectgroupmemberAvgAggregateOutputType = {
    projectgroupmemberid: number | null
    studentcgpa: number | null
    projectgroupid: number | null
    studentid: number | null
  }

  export type ProjectgroupmemberSumAggregateOutputType = {
    projectgroupmemberid: number | null
    studentcgpa: number | null
    projectgroupid: number | null
    studentid: number | null
  }

  export type ProjectgroupmemberMinAggregateOutputType = {
    projectgroupmemberid: number | null
    isgroupleader: boolean | null
    studentcgpa: number | null
    projectgroupid: number | null
    studentid: number | null
    description: string | null
    created: Date | null
    modified: Date | null
  }

  export type ProjectgroupmemberMaxAggregateOutputType = {
    projectgroupmemberid: number | null
    isgroupleader: boolean | null
    studentcgpa: number | null
    projectgroupid: number | null
    studentid: number | null
    description: string | null
    created: Date | null
    modified: Date | null
  }

  export type ProjectgroupmemberCountAggregateOutputType = {
    projectgroupmemberid: number
    isgroupleader: number
    studentcgpa: number
    projectgroupid: number
    studentid: number
    description: number
    created: number
    modified: number
    _all: number
  }


  export type ProjectgroupmemberAvgAggregateInputType = {
    projectgroupmemberid?: true
    studentcgpa?: true
    projectgroupid?: true
    studentid?: true
  }

  export type ProjectgroupmemberSumAggregateInputType = {
    projectgroupmemberid?: true
    studentcgpa?: true
    projectgroupid?: true
    studentid?: true
  }

  export type ProjectgroupmemberMinAggregateInputType = {
    projectgroupmemberid?: true
    isgroupleader?: true
    studentcgpa?: true
    projectgroupid?: true
    studentid?: true
    description?: true
    created?: true
    modified?: true
  }

  export type ProjectgroupmemberMaxAggregateInputType = {
    projectgroupmemberid?: true
    isgroupleader?: true
    studentcgpa?: true
    projectgroupid?: true
    studentid?: true
    description?: true
    created?: true
    modified?: true
  }

  export type ProjectgroupmemberCountAggregateInputType = {
    projectgroupmemberid?: true
    isgroupleader?: true
    studentcgpa?: true
    projectgroupid?: true
    studentid?: true
    description?: true
    created?: true
    modified?: true
    _all?: true
  }

  export type ProjectgroupmemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projectgroupmember to aggregate.
     */
    where?: projectgroupmemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projectgroupmembers to fetch.
     */
    orderBy?: projectgroupmemberOrderByWithRelationInput | projectgroupmemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectgroupmemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projectgroupmembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projectgroupmembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projectgroupmembers
    **/
    _count?: true | ProjectgroupmemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectgroupmemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectgroupmemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectgroupmemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectgroupmemberMaxAggregateInputType
  }

  export type GetProjectgroupmemberAggregateType<T extends ProjectgroupmemberAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectgroupmember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectgroupmember[P]>
      : GetScalarType<T[P], AggregateProjectgroupmember[P]>
  }




  export type projectgroupmemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectgroupmemberWhereInput
    orderBy?: projectgroupmemberOrderByWithAggregationInput | projectgroupmemberOrderByWithAggregationInput[]
    by: ProjectgroupmemberScalarFieldEnum[] | ProjectgroupmemberScalarFieldEnum
    having?: projectgroupmemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectgroupmemberCountAggregateInputType | true
    _avg?: ProjectgroupmemberAvgAggregateInputType
    _sum?: ProjectgroupmemberSumAggregateInputType
    _min?: ProjectgroupmemberMinAggregateInputType
    _max?: ProjectgroupmemberMaxAggregateInputType
  }

  export type ProjectgroupmemberGroupByOutputType = {
    projectgroupmemberid: number
    isgroupleader: boolean | null
    studentcgpa: number | null
    projectgroupid: number | null
    studentid: number | null
    description: string | null
    created: Date | null
    modified: Date | null
    _count: ProjectgroupmemberCountAggregateOutputType | null
    _avg: ProjectgroupmemberAvgAggregateOutputType | null
    _sum: ProjectgroupmemberSumAggregateOutputType | null
    _min: ProjectgroupmemberMinAggregateOutputType | null
    _max: ProjectgroupmemberMaxAggregateOutputType | null
  }

  type GetProjectgroupmemberGroupByPayload<T extends projectgroupmemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectgroupmemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectgroupmemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectgroupmemberGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectgroupmemberGroupByOutputType[P]>
        }
      >
    >


  export type projectgroupmemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectgroupmemberid?: boolean
    isgroupleader?: boolean
    studentcgpa?: boolean
    projectgroupid?: boolean
    studentid?: boolean
    description?: boolean
    created?: boolean
    modified?: boolean
    projectgroup?: boolean | projectgroupmember$projectgroupArgs<ExtArgs>
    student?: boolean | projectgroupmember$studentArgs<ExtArgs>
  }, ExtArgs["result"]["projectgroupmember"]>

  export type projectgroupmemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectgroupmemberid?: boolean
    isgroupleader?: boolean
    studentcgpa?: boolean
    projectgroupid?: boolean
    studentid?: boolean
    description?: boolean
    created?: boolean
    modified?: boolean
    projectgroup?: boolean | projectgroupmember$projectgroupArgs<ExtArgs>
    student?: boolean | projectgroupmember$studentArgs<ExtArgs>
  }, ExtArgs["result"]["projectgroupmember"]>

  export type projectgroupmemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectgroupmemberid?: boolean
    isgroupleader?: boolean
    studentcgpa?: boolean
    projectgroupid?: boolean
    studentid?: boolean
    description?: boolean
    created?: boolean
    modified?: boolean
    projectgroup?: boolean | projectgroupmember$projectgroupArgs<ExtArgs>
    student?: boolean | projectgroupmember$studentArgs<ExtArgs>
  }, ExtArgs["result"]["projectgroupmember"]>

  export type projectgroupmemberSelectScalar = {
    projectgroupmemberid?: boolean
    isgroupleader?: boolean
    studentcgpa?: boolean
    projectgroupid?: boolean
    studentid?: boolean
    description?: boolean
    created?: boolean
    modified?: boolean
  }

  export type projectgroupmemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"projectgroupmemberid" | "isgroupleader" | "studentcgpa" | "projectgroupid" | "studentid" | "description" | "created" | "modified", ExtArgs["result"]["projectgroupmember"]>
  export type projectgroupmemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectgroup?: boolean | projectgroupmember$projectgroupArgs<ExtArgs>
    student?: boolean | projectgroupmember$studentArgs<ExtArgs>
  }
  export type projectgroupmemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectgroup?: boolean | projectgroupmember$projectgroupArgs<ExtArgs>
    student?: boolean | projectgroupmember$studentArgs<ExtArgs>
  }
  export type projectgroupmemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectgroup?: boolean | projectgroupmember$projectgroupArgs<ExtArgs>
    student?: boolean | projectgroupmember$studentArgs<ExtArgs>
  }

  export type $projectgroupmemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "projectgroupmember"
    objects: {
      projectgroup: Prisma.$projectgroupPayload<ExtArgs> | null
      student: Prisma.$studentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      projectgroupmemberid: number
      isgroupleader: boolean | null
      studentcgpa: number | null
      projectgroupid: number | null
      studentid: number | null
      description: string | null
      created: Date | null
      modified: Date | null
    }, ExtArgs["result"]["projectgroupmember"]>
    composites: {}
  }

  type projectgroupmemberGetPayload<S extends boolean | null | undefined | projectgroupmemberDefaultArgs> = $Result.GetResult<Prisma.$projectgroupmemberPayload, S>

  type projectgroupmemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<projectgroupmemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectgroupmemberCountAggregateInputType | true
    }

  export interface projectgroupmemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['projectgroupmember'], meta: { name: 'projectgroupmember' } }
    /**
     * Find zero or one Projectgroupmember that matches the filter.
     * @param {projectgroupmemberFindUniqueArgs} args - Arguments to find a Projectgroupmember
     * @example
     * // Get one Projectgroupmember
     * const projectgroupmember = await prisma.projectgroupmember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectgroupmemberFindUniqueArgs>(args: SelectSubset<T, projectgroupmemberFindUniqueArgs<ExtArgs>>): Prisma__projectgroupmemberClient<$Result.GetResult<Prisma.$projectgroupmemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Projectgroupmember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {projectgroupmemberFindUniqueOrThrowArgs} args - Arguments to find a Projectgroupmember
     * @example
     * // Get one Projectgroupmember
     * const projectgroupmember = await prisma.projectgroupmember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectgroupmemberFindUniqueOrThrowArgs>(args: SelectSubset<T, projectgroupmemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectgroupmemberClient<$Result.GetResult<Prisma.$projectgroupmemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projectgroupmember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectgroupmemberFindFirstArgs} args - Arguments to find a Projectgroupmember
     * @example
     * // Get one Projectgroupmember
     * const projectgroupmember = await prisma.projectgroupmember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectgroupmemberFindFirstArgs>(args?: SelectSubset<T, projectgroupmemberFindFirstArgs<ExtArgs>>): Prisma__projectgroupmemberClient<$Result.GetResult<Prisma.$projectgroupmemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projectgroupmember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectgroupmemberFindFirstOrThrowArgs} args - Arguments to find a Projectgroupmember
     * @example
     * // Get one Projectgroupmember
     * const projectgroupmember = await prisma.projectgroupmember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectgroupmemberFindFirstOrThrowArgs>(args?: SelectSubset<T, projectgroupmemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectgroupmemberClient<$Result.GetResult<Prisma.$projectgroupmemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projectgroupmembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectgroupmemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projectgroupmembers
     * const projectgroupmembers = await prisma.projectgroupmember.findMany()
     * 
     * // Get first 10 Projectgroupmembers
     * const projectgroupmembers = await prisma.projectgroupmember.findMany({ take: 10 })
     * 
     * // Only select the `projectgroupmemberid`
     * const projectgroupmemberWithProjectgroupmemberidOnly = await prisma.projectgroupmember.findMany({ select: { projectgroupmemberid: true } })
     * 
     */
    findMany<T extends projectgroupmemberFindManyArgs>(args?: SelectSubset<T, projectgroupmemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectgroupmemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Projectgroupmember.
     * @param {projectgroupmemberCreateArgs} args - Arguments to create a Projectgroupmember.
     * @example
     * // Create one Projectgroupmember
     * const Projectgroupmember = await prisma.projectgroupmember.create({
     *   data: {
     *     // ... data to create a Projectgroupmember
     *   }
     * })
     * 
     */
    create<T extends projectgroupmemberCreateArgs>(args: SelectSubset<T, projectgroupmemberCreateArgs<ExtArgs>>): Prisma__projectgroupmemberClient<$Result.GetResult<Prisma.$projectgroupmemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projectgroupmembers.
     * @param {projectgroupmemberCreateManyArgs} args - Arguments to create many Projectgroupmembers.
     * @example
     * // Create many Projectgroupmembers
     * const projectgroupmember = await prisma.projectgroupmember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projectgroupmemberCreateManyArgs>(args?: SelectSubset<T, projectgroupmemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projectgroupmembers and returns the data saved in the database.
     * @param {projectgroupmemberCreateManyAndReturnArgs} args - Arguments to create many Projectgroupmembers.
     * @example
     * // Create many Projectgroupmembers
     * const projectgroupmember = await prisma.projectgroupmember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projectgroupmembers and only return the `projectgroupmemberid`
     * const projectgroupmemberWithProjectgroupmemberidOnly = await prisma.projectgroupmember.createManyAndReturn({
     *   select: { projectgroupmemberid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends projectgroupmemberCreateManyAndReturnArgs>(args?: SelectSubset<T, projectgroupmemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectgroupmemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Projectgroupmember.
     * @param {projectgroupmemberDeleteArgs} args - Arguments to delete one Projectgroupmember.
     * @example
     * // Delete one Projectgroupmember
     * const Projectgroupmember = await prisma.projectgroupmember.delete({
     *   where: {
     *     // ... filter to delete one Projectgroupmember
     *   }
     * })
     * 
     */
    delete<T extends projectgroupmemberDeleteArgs>(args: SelectSubset<T, projectgroupmemberDeleteArgs<ExtArgs>>): Prisma__projectgroupmemberClient<$Result.GetResult<Prisma.$projectgroupmemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Projectgroupmember.
     * @param {projectgroupmemberUpdateArgs} args - Arguments to update one Projectgroupmember.
     * @example
     * // Update one Projectgroupmember
     * const projectgroupmember = await prisma.projectgroupmember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projectgroupmemberUpdateArgs>(args: SelectSubset<T, projectgroupmemberUpdateArgs<ExtArgs>>): Prisma__projectgroupmemberClient<$Result.GetResult<Prisma.$projectgroupmemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projectgroupmembers.
     * @param {projectgroupmemberDeleteManyArgs} args - Arguments to filter Projectgroupmembers to delete.
     * @example
     * // Delete a few Projectgroupmembers
     * const { count } = await prisma.projectgroupmember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projectgroupmemberDeleteManyArgs>(args?: SelectSubset<T, projectgroupmemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projectgroupmembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectgroupmemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projectgroupmembers
     * const projectgroupmember = await prisma.projectgroupmember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projectgroupmemberUpdateManyArgs>(args: SelectSubset<T, projectgroupmemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projectgroupmembers and returns the data updated in the database.
     * @param {projectgroupmemberUpdateManyAndReturnArgs} args - Arguments to update many Projectgroupmembers.
     * @example
     * // Update many Projectgroupmembers
     * const projectgroupmember = await prisma.projectgroupmember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projectgroupmembers and only return the `projectgroupmemberid`
     * const projectgroupmemberWithProjectgroupmemberidOnly = await prisma.projectgroupmember.updateManyAndReturn({
     *   select: { projectgroupmemberid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends projectgroupmemberUpdateManyAndReturnArgs>(args: SelectSubset<T, projectgroupmemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectgroupmemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Projectgroupmember.
     * @param {projectgroupmemberUpsertArgs} args - Arguments to update or create a Projectgroupmember.
     * @example
     * // Update or create a Projectgroupmember
     * const projectgroupmember = await prisma.projectgroupmember.upsert({
     *   create: {
     *     // ... data to create a Projectgroupmember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projectgroupmember we want to update
     *   }
     * })
     */
    upsert<T extends projectgroupmemberUpsertArgs>(args: SelectSubset<T, projectgroupmemberUpsertArgs<ExtArgs>>): Prisma__projectgroupmemberClient<$Result.GetResult<Prisma.$projectgroupmemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projectgroupmembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectgroupmemberCountArgs} args - Arguments to filter Projectgroupmembers to count.
     * @example
     * // Count the number of Projectgroupmembers
     * const count = await prisma.projectgroupmember.count({
     *   where: {
     *     // ... the filter for the Projectgroupmembers we want to count
     *   }
     * })
    **/
    count<T extends projectgroupmemberCountArgs>(
      args?: Subset<T, projectgroupmemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectgroupmemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projectgroupmember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectgroupmemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectgroupmemberAggregateArgs>(args: Subset<T, ProjectgroupmemberAggregateArgs>): Prisma.PrismaPromise<GetProjectgroupmemberAggregateType<T>>

    /**
     * Group by Projectgroupmember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectgroupmemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends projectgroupmemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectgroupmemberGroupByArgs['orderBy'] }
        : { orderBy?: projectgroupmemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, projectgroupmemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectgroupmemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the projectgroupmember model
   */
  readonly fields: projectgroupmemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for projectgroupmember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectgroupmemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectgroup<T extends projectgroupmember$projectgroupArgs<ExtArgs> = {}>(args?: Subset<T, projectgroupmember$projectgroupArgs<ExtArgs>>): Prisma__projectgroupClient<$Result.GetResult<Prisma.$projectgroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    student<T extends projectgroupmember$studentArgs<ExtArgs> = {}>(args?: Subset<T, projectgroupmember$studentArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the projectgroupmember model
   */
  interface projectgroupmemberFieldRefs {
    readonly projectgroupmemberid: FieldRef<"projectgroupmember", 'Int'>
    readonly isgroupleader: FieldRef<"projectgroupmember", 'Boolean'>
    readonly studentcgpa: FieldRef<"projectgroupmember", 'Float'>
    readonly projectgroupid: FieldRef<"projectgroupmember", 'Int'>
    readonly studentid: FieldRef<"projectgroupmember", 'Int'>
    readonly description: FieldRef<"projectgroupmember", 'String'>
    readonly created: FieldRef<"projectgroupmember", 'DateTime'>
    readonly modified: FieldRef<"projectgroupmember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * projectgroupmember findUnique
   */
  export type projectgroupmemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectgroupmember
     */
    select?: projectgroupmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectgroupmember
     */
    omit?: projectgroupmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectgroupmemberInclude<ExtArgs> | null
    /**
     * Filter, which projectgroupmember to fetch.
     */
    where: projectgroupmemberWhereUniqueInput
  }

  /**
   * projectgroupmember findUniqueOrThrow
   */
  export type projectgroupmemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectgroupmember
     */
    select?: projectgroupmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectgroupmember
     */
    omit?: projectgroupmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectgroupmemberInclude<ExtArgs> | null
    /**
     * Filter, which projectgroupmember to fetch.
     */
    where: projectgroupmemberWhereUniqueInput
  }

  /**
   * projectgroupmember findFirst
   */
  export type projectgroupmemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectgroupmember
     */
    select?: projectgroupmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectgroupmember
     */
    omit?: projectgroupmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectgroupmemberInclude<ExtArgs> | null
    /**
     * Filter, which projectgroupmember to fetch.
     */
    where?: projectgroupmemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projectgroupmembers to fetch.
     */
    orderBy?: projectgroupmemberOrderByWithRelationInput | projectgroupmemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projectgroupmembers.
     */
    cursor?: projectgroupmemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projectgroupmembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projectgroupmembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projectgroupmembers.
     */
    distinct?: ProjectgroupmemberScalarFieldEnum | ProjectgroupmemberScalarFieldEnum[]
  }

  /**
   * projectgroupmember findFirstOrThrow
   */
  export type projectgroupmemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectgroupmember
     */
    select?: projectgroupmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectgroupmember
     */
    omit?: projectgroupmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectgroupmemberInclude<ExtArgs> | null
    /**
     * Filter, which projectgroupmember to fetch.
     */
    where?: projectgroupmemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projectgroupmembers to fetch.
     */
    orderBy?: projectgroupmemberOrderByWithRelationInput | projectgroupmemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projectgroupmembers.
     */
    cursor?: projectgroupmemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projectgroupmembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projectgroupmembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projectgroupmembers.
     */
    distinct?: ProjectgroupmemberScalarFieldEnum | ProjectgroupmemberScalarFieldEnum[]
  }

  /**
   * projectgroupmember findMany
   */
  export type projectgroupmemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectgroupmember
     */
    select?: projectgroupmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectgroupmember
     */
    omit?: projectgroupmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectgroupmemberInclude<ExtArgs> | null
    /**
     * Filter, which projectgroupmembers to fetch.
     */
    where?: projectgroupmemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projectgroupmembers to fetch.
     */
    orderBy?: projectgroupmemberOrderByWithRelationInput | projectgroupmemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projectgroupmembers.
     */
    cursor?: projectgroupmemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projectgroupmembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projectgroupmembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projectgroupmembers.
     */
    distinct?: ProjectgroupmemberScalarFieldEnum | ProjectgroupmemberScalarFieldEnum[]
  }

  /**
   * projectgroupmember create
   */
  export type projectgroupmemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectgroupmember
     */
    select?: projectgroupmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectgroupmember
     */
    omit?: projectgroupmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectgroupmemberInclude<ExtArgs> | null
    /**
     * The data needed to create a projectgroupmember.
     */
    data?: XOR<projectgroupmemberCreateInput, projectgroupmemberUncheckedCreateInput>
  }

  /**
   * projectgroupmember createMany
   */
  export type projectgroupmemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projectgroupmembers.
     */
    data: projectgroupmemberCreateManyInput | projectgroupmemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * projectgroupmember createManyAndReturn
   */
  export type projectgroupmemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectgroupmember
     */
    select?: projectgroupmemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projectgroupmember
     */
    omit?: projectgroupmemberOmit<ExtArgs> | null
    /**
     * The data used to create many projectgroupmembers.
     */
    data: projectgroupmemberCreateManyInput | projectgroupmemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectgroupmemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * projectgroupmember update
   */
  export type projectgroupmemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectgroupmember
     */
    select?: projectgroupmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectgroupmember
     */
    omit?: projectgroupmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectgroupmemberInclude<ExtArgs> | null
    /**
     * The data needed to update a projectgroupmember.
     */
    data: XOR<projectgroupmemberUpdateInput, projectgroupmemberUncheckedUpdateInput>
    /**
     * Choose, which projectgroupmember to update.
     */
    where: projectgroupmemberWhereUniqueInput
  }

  /**
   * projectgroupmember updateMany
   */
  export type projectgroupmemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projectgroupmembers.
     */
    data: XOR<projectgroupmemberUpdateManyMutationInput, projectgroupmemberUncheckedUpdateManyInput>
    /**
     * Filter which projectgroupmembers to update
     */
    where?: projectgroupmemberWhereInput
    /**
     * Limit how many projectgroupmembers to update.
     */
    limit?: number
  }

  /**
   * projectgroupmember updateManyAndReturn
   */
  export type projectgroupmemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectgroupmember
     */
    select?: projectgroupmemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projectgroupmember
     */
    omit?: projectgroupmemberOmit<ExtArgs> | null
    /**
     * The data used to update projectgroupmembers.
     */
    data: XOR<projectgroupmemberUpdateManyMutationInput, projectgroupmemberUncheckedUpdateManyInput>
    /**
     * Filter which projectgroupmembers to update
     */
    where?: projectgroupmemberWhereInput
    /**
     * Limit how many projectgroupmembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectgroupmemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * projectgroupmember upsert
   */
  export type projectgroupmemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectgroupmember
     */
    select?: projectgroupmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectgroupmember
     */
    omit?: projectgroupmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectgroupmemberInclude<ExtArgs> | null
    /**
     * The filter to search for the projectgroupmember to update in case it exists.
     */
    where: projectgroupmemberWhereUniqueInput
    /**
     * In case the projectgroupmember found by the `where` argument doesn't exist, create a new projectgroupmember with this data.
     */
    create: XOR<projectgroupmemberCreateInput, projectgroupmemberUncheckedCreateInput>
    /**
     * In case the projectgroupmember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectgroupmemberUpdateInput, projectgroupmemberUncheckedUpdateInput>
  }

  /**
   * projectgroupmember delete
   */
  export type projectgroupmemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectgroupmember
     */
    select?: projectgroupmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectgroupmember
     */
    omit?: projectgroupmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectgroupmemberInclude<ExtArgs> | null
    /**
     * Filter which projectgroupmember to delete.
     */
    where: projectgroupmemberWhereUniqueInput
  }

  /**
   * projectgroupmember deleteMany
   */
  export type projectgroupmemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projectgroupmembers to delete
     */
    where?: projectgroupmemberWhereInput
    /**
     * Limit how many projectgroupmembers to delete.
     */
    limit?: number
  }

  /**
   * projectgroupmember.projectgroup
   */
  export type projectgroupmember$projectgroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectgroup
     */
    select?: projectgroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectgroup
     */
    omit?: projectgroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectgroupInclude<ExtArgs> | null
    where?: projectgroupWhereInput
  }

  /**
   * projectgroupmember.student
   */
  export type projectgroupmember$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    where?: studentWhereInput
  }

  /**
   * projectgroupmember without action
   */
  export type projectgroupmemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectgroupmember
     */
    select?: projectgroupmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectgroupmember
     */
    omit?: projectgroupmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectgroupmemberInclude<ExtArgs> | null
  }


  /**
   * Model projectmeeting
   */

  export type AggregateProjectmeeting = {
    _count: ProjectmeetingCountAggregateOutputType | null
    _avg: ProjectmeetingAvgAggregateOutputType | null
    _sum: ProjectmeetingSumAggregateOutputType | null
    _min: ProjectmeetingMinAggregateOutputType | null
    _max: ProjectmeetingMaxAggregateOutputType | null
  }

  export type ProjectmeetingAvgAggregateOutputType = {
    projectmeetingid: number | null
    projectgroupid: number | null
    guidestaffid: number | null
  }

  export type ProjectmeetingSumAggregateOutputType = {
    projectmeetingid: number | null
    projectgroupid: number | null
    guidestaffid: number | null
  }

  export type ProjectmeetingMinAggregateOutputType = {
    projectmeetingid: number | null
    projectgroupid: number | null
    guidestaffid: number | null
    meetingdatetime: Date | null
    meetingpurpose: string | null
    meetinglocation: string | null
    meetingnotes: string | null
    meetingstatus: string | null
    meetingstatusdescription: string | null
    meetingstatusdatetime: Date | null
    description: string | null
    created: Date | null
    modified: Date | null
  }

  export type ProjectmeetingMaxAggregateOutputType = {
    projectmeetingid: number | null
    projectgroupid: number | null
    guidestaffid: number | null
    meetingdatetime: Date | null
    meetingpurpose: string | null
    meetinglocation: string | null
    meetingnotes: string | null
    meetingstatus: string | null
    meetingstatusdescription: string | null
    meetingstatusdatetime: Date | null
    description: string | null
    created: Date | null
    modified: Date | null
  }

  export type ProjectmeetingCountAggregateOutputType = {
    projectmeetingid: number
    projectgroupid: number
    guidestaffid: number
    meetingdatetime: number
    meetingpurpose: number
    meetinglocation: number
    meetingnotes: number
    meetingstatus: number
    meetingstatusdescription: number
    meetingstatusdatetime: number
    description: number
    created: number
    modified: number
    _all: number
  }


  export type ProjectmeetingAvgAggregateInputType = {
    projectmeetingid?: true
    projectgroupid?: true
    guidestaffid?: true
  }

  export type ProjectmeetingSumAggregateInputType = {
    projectmeetingid?: true
    projectgroupid?: true
    guidestaffid?: true
  }

  export type ProjectmeetingMinAggregateInputType = {
    projectmeetingid?: true
    projectgroupid?: true
    guidestaffid?: true
    meetingdatetime?: true
    meetingpurpose?: true
    meetinglocation?: true
    meetingnotes?: true
    meetingstatus?: true
    meetingstatusdescription?: true
    meetingstatusdatetime?: true
    description?: true
    created?: true
    modified?: true
  }

  export type ProjectmeetingMaxAggregateInputType = {
    projectmeetingid?: true
    projectgroupid?: true
    guidestaffid?: true
    meetingdatetime?: true
    meetingpurpose?: true
    meetinglocation?: true
    meetingnotes?: true
    meetingstatus?: true
    meetingstatusdescription?: true
    meetingstatusdatetime?: true
    description?: true
    created?: true
    modified?: true
  }

  export type ProjectmeetingCountAggregateInputType = {
    projectmeetingid?: true
    projectgroupid?: true
    guidestaffid?: true
    meetingdatetime?: true
    meetingpurpose?: true
    meetinglocation?: true
    meetingnotes?: true
    meetingstatus?: true
    meetingstatusdescription?: true
    meetingstatusdatetime?: true
    description?: true
    created?: true
    modified?: true
    _all?: true
  }

  export type ProjectmeetingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projectmeeting to aggregate.
     */
    where?: projectmeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projectmeetings to fetch.
     */
    orderBy?: projectmeetingOrderByWithRelationInput | projectmeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectmeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projectmeetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projectmeetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projectmeetings
    **/
    _count?: true | ProjectmeetingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectmeetingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectmeetingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectmeetingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectmeetingMaxAggregateInputType
  }

  export type GetProjectmeetingAggregateType<T extends ProjectmeetingAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectmeeting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectmeeting[P]>
      : GetScalarType<T[P], AggregateProjectmeeting[P]>
  }




  export type projectmeetingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectmeetingWhereInput
    orderBy?: projectmeetingOrderByWithAggregationInput | projectmeetingOrderByWithAggregationInput[]
    by: ProjectmeetingScalarFieldEnum[] | ProjectmeetingScalarFieldEnum
    having?: projectmeetingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectmeetingCountAggregateInputType | true
    _avg?: ProjectmeetingAvgAggregateInputType
    _sum?: ProjectmeetingSumAggregateInputType
    _min?: ProjectmeetingMinAggregateInputType
    _max?: ProjectmeetingMaxAggregateInputType
  }

  export type ProjectmeetingGroupByOutputType = {
    projectmeetingid: number
    projectgroupid: number | null
    guidestaffid: number | null
    meetingdatetime: Date | null
    meetingpurpose: string | null
    meetinglocation: string | null
    meetingnotes: string | null
    meetingstatus: string | null
    meetingstatusdescription: string | null
    meetingstatusdatetime: Date | null
    description: string | null
    created: Date | null
    modified: Date | null
    _count: ProjectmeetingCountAggregateOutputType | null
    _avg: ProjectmeetingAvgAggregateOutputType | null
    _sum: ProjectmeetingSumAggregateOutputType | null
    _min: ProjectmeetingMinAggregateOutputType | null
    _max: ProjectmeetingMaxAggregateOutputType | null
  }

  type GetProjectmeetingGroupByPayload<T extends projectmeetingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectmeetingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectmeetingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectmeetingGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectmeetingGroupByOutputType[P]>
        }
      >
    >


  export type projectmeetingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectmeetingid?: boolean
    projectgroupid?: boolean
    guidestaffid?: boolean
    meetingdatetime?: boolean
    meetingpurpose?: boolean
    meetinglocation?: boolean
    meetingnotes?: boolean
    meetingstatus?: boolean
    meetingstatusdescription?: boolean
    meetingstatusdatetime?: boolean
    description?: boolean
    created?: boolean
    modified?: boolean
    staff?: boolean | projectmeeting$staffArgs<ExtArgs>
    projectgroup?: boolean | projectmeeting$projectgroupArgs<ExtArgs>
    projectmeetingattendance?: boolean | projectmeeting$projectmeetingattendanceArgs<ExtArgs>
    _count?: boolean | ProjectmeetingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectmeeting"]>

  export type projectmeetingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectmeetingid?: boolean
    projectgroupid?: boolean
    guidestaffid?: boolean
    meetingdatetime?: boolean
    meetingpurpose?: boolean
    meetinglocation?: boolean
    meetingnotes?: boolean
    meetingstatus?: boolean
    meetingstatusdescription?: boolean
    meetingstatusdatetime?: boolean
    description?: boolean
    created?: boolean
    modified?: boolean
    staff?: boolean | projectmeeting$staffArgs<ExtArgs>
    projectgroup?: boolean | projectmeeting$projectgroupArgs<ExtArgs>
  }, ExtArgs["result"]["projectmeeting"]>

  export type projectmeetingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectmeetingid?: boolean
    projectgroupid?: boolean
    guidestaffid?: boolean
    meetingdatetime?: boolean
    meetingpurpose?: boolean
    meetinglocation?: boolean
    meetingnotes?: boolean
    meetingstatus?: boolean
    meetingstatusdescription?: boolean
    meetingstatusdatetime?: boolean
    description?: boolean
    created?: boolean
    modified?: boolean
    staff?: boolean | projectmeeting$staffArgs<ExtArgs>
    projectgroup?: boolean | projectmeeting$projectgroupArgs<ExtArgs>
  }, ExtArgs["result"]["projectmeeting"]>

  export type projectmeetingSelectScalar = {
    projectmeetingid?: boolean
    projectgroupid?: boolean
    guidestaffid?: boolean
    meetingdatetime?: boolean
    meetingpurpose?: boolean
    meetinglocation?: boolean
    meetingnotes?: boolean
    meetingstatus?: boolean
    meetingstatusdescription?: boolean
    meetingstatusdatetime?: boolean
    description?: boolean
    created?: boolean
    modified?: boolean
  }

  export type projectmeetingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"projectmeetingid" | "projectgroupid" | "guidestaffid" | "meetingdatetime" | "meetingpurpose" | "meetinglocation" | "meetingnotes" | "meetingstatus" | "meetingstatusdescription" | "meetingstatusdatetime" | "description" | "created" | "modified", ExtArgs["result"]["projectmeeting"]>
  export type projectmeetingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | projectmeeting$staffArgs<ExtArgs>
    projectgroup?: boolean | projectmeeting$projectgroupArgs<ExtArgs>
    projectmeetingattendance?: boolean | projectmeeting$projectmeetingattendanceArgs<ExtArgs>
    _count?: boolean | ProjectmeetingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type projectmeetingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | projectmeeting$staffArgs<ExtArgs>
    projectgroup?: boolean | projectmeeting$projectgroupArgs<ExtArgs>
  }
  export type projectmeetingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | projectmeeting$staffArgs<ExtArgs>
    projectgroup?: boolean | projectmeeting$projectgroupArgs<ExtArgs>
  }

  export type $projectmeetingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "projectmeeting"
    objects: {
      staff: Prisma.$staffPayload<ExtArgs> | null
      projectgroup: Prisma.$projectgroupPayload<ExtArgs> | null
      projectmeetingattendance: Prisma.$projectmeetingattendancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      projectmeetingid: number
      projectgroupid: number | null
      guidestaffid: number | null
      meetingdatetime: Date | null
      meetingpurpose: string | null
      meetinglocation: string | null
      meetingnotes: string | null
      meetingstatus: string | null
      meetingstatusdescription: string | null
      meetingstatusdatetime: Date | null
      description: string | null
      created: Date | null
      modified: Date | null
    }, ExtArgs["result"]["projectmeeting"]>
    composites: {}
  }

  type projectmeetingGetPayload<S extends boolean | null | undefined | projectmeetingDefaultArgs> = $Result.GetResult<Prisma.$projectmeetingPayload, S>

  type projectmeetingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<projectmeetingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectmeetingCountAggregateInputType | true
    }

  export interface projectmeetingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['projectmeeting'], meta: { name: 'projectmeeting' } }
    /**
     * Find zero or one Projectmeeting that matches the filter.
     * @param {projectmeetingFindUniqueArgs} args - Arguments to find a Projectmeeting
     * @example
     * // Get one Projectmeeting
     * const projectmeeting = await prisma.projectmeeting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectmeetingFindUniqueArgs>(args: SelectSubset<T, projectmeetingFindUniqueArgs<ExtArgs>>): Prisma__projectmeetingClient<$Result.GetResult<Prisma.$projectmeetingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Projectmeeting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {projectmeetingFindUniqueOrThrowArgs} args - Arguments to find a Projectmeeting
     * @example
     * // Get one Projectmeeting
     * const projectmeeting = await prisma.projectmeeting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectmeetingFindUniqueOrThrowArgs>(args: SelectSubset<T, projectmeetingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectmeetingClient<$Result.GetResult<Prisma.$projectmeetingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projectmeeting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectmeetingFindFirstArgs} args - Arguments to find a Projectmeeting
     * @example
     * // Get one Projectmeeting
     * const projectmeeting = await prisma.projectmeeting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectmeetingFindFirstArgs>(args?: SelectSubset<T, projectmeetingFindFirstArgs<ExtArgs>>): Prisma__projectmeetingClient<$Result.GetResult<Prisma.$projectmeetingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projectmeeting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectmeetingFindFirstOrThrowArgs} args - Arguments to find a Projectmeeting
     * @example
     * // Get one Projectmeeting
     * const projectmeeting = await prisma.projectmeeting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectmeetingFindFirstOrThrowArgs>(args?: SelectSubset<T, projectmeetingFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectmeetingClient<$Result.GetResult<Prisma.$projectmeetingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projectmeetings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectmeetingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projectmeetings
     * const projectmeetings = await prisma.projectmeeting.findMany()
     * 
     * // Get first 10 Projectmeetings
     * const projectmeetings = await prisma.projectmeeting.findMany({ take: 10 })
     * 
     * // Only select the `projectmeetingid`
     * const projectmeetingWithProjectmeetingidOnly = await prisma.projectmeeting.findMany({ select: { projectmeetingid: true } })
     * 
     */
    findMany<T extends projectmeetingFindManyArgs>(args?: SelectSubset<T, projectmeetingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectmeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Projectmeeting.
     * @param {projectmeetingCreateArgs} args - Arguments to create a Projectmeeting.
     * @example
     * // Create one Projectmeeting
     * const Projectmeeting = await prisma.projectmeeting.create({
     *   data: {
     *     // ... data to create a Projectmeeting
     *   }
     * })
     * 
     */
    create<T extends projectmeetingCreateArgs>(args: SelectSubset<T, projectmeetingCreateArgs<ExtArgs>>): Prisma__projectmeetingClient<$Result.GetResult<Prisma.$projectmeetingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projectmeetings.
     * @param {projectmeetingCreateManyArgs} args - Arguments to create many Projectmeetings.
     * @example
     * // Create many Projectmeetings
     * const projectmeeting = await prisma.projectmeeting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projectmeetingCreateManyArgs>(args?: SelectSubset<T, projectmeetingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projectmeetings and returns the data saved in the database.
     * @param {projectmeetingCreateManyAndReturnArgs} args - Arguments to create many Projectmeetings.
     * @example
     * // Create many Projectmeetings
     * const projectmeeting = await prisma.projectmeeting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projectmeetings and only return the `projectmeetingid`
     * const projectmeetingWithProjectmeetingidOnly = await prisma.projectmeeting.createManyAndReturn({
     *   select: { projectmeetingid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends projectmeetingCreateManyAndReturnArgs>(args?: SelectSubset<T, projectmeetingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectmeetingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Projectmeeting.
     * @param {projectmeetingDeleteArgs} args - Arguments to delete one Projectmeeting.
     * @example
     * // Delete one Projectmeeting
     * const Projectmeeting = await prisma.projectmeeting.delete({
     *   where: {
     *     // ... filter to delete one Projectmeeting
     *   }
     * })
     * 
     */
    delete<T extends projectmeetingDeleteArgs>(args: SelectSubset<T, projectmeetingDeleteArgs<ExtArgs>>): Prisma__projectmeetingClient<$Result.GetResult<Prisma.$projectmeetingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Projectmeeting.
     * @param {projectmeetingUpdateArgs} args - Arguments to update one Projectmeeting.
     * @example
     * // Update one Projectmeeting
     * const projectmeeting = await prisma.projectmeeting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projectmeetingUpdateArgs>(args: SelectSubset<T, projectmeetingUpdateArgs<ExtArgs>>): Prisma__projectmeetingClient<$Result.GetResult<Prisma.$projectmeetingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projectmeetings.
     * @param {projectmeetingDeleteManyArgs} args - Arguments to filter Projectmeetings to delete.
     * @example
     * // Delete a few Projectmeetings
     * const { count } = await prisma.projectmeeting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projectmeetingDeleteManyArgs>(args?: SelectSubset<T, projectmeetingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projectmeetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectmeetingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projectmeetings
     * const projectmeeting = await prisma.projectmeeting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projectmeetingUpdateManyArgs>(args: SelectSubset<T, projectmeetingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projectmeetings and returns the data updated in the database.
     * @param {projectmeetingUpdateManyAndReturnArgs} args - Arguments to update many Projectmeetings.
     * @example
     * // Update many Projectmeetings
     * const projectmeeting = await prisma.projectmeeting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projectmeetings and only return the `projectmeetingid`
     * const projectmeetingWithProjectmeetingidOnly = await prisma.projectmeeting.updateManyAndReturn({
     *   select: { projectmeetingid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends projectmeetingUpdateManyAndReturnArgs>(args: SelectSubset<T, projectmeetingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectmeetingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Projectmeeting.
     * @param {projectmeetingUpsertArgs} args - Arguments to update or create a Projectmeeting.
     * @example
     * // Update or create a Projectmeeting
     * const projectmeeting = await prisma.projectmeeting.upsert({
     *   create: {
     *     // ... data to create a Projectmeeting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projectmeeting we want to update
     *   }
     * })
     */
    upsert<T extends projectmeetingUpsertArgs>(args: SelectSubset<T, projectmeetingUpsertArgs<ExtArgs>>): Prisma__projectmeetingClient<$Result.GetResult<Prisma.$projectmeetingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projectmeetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectmeetingCountArgs} args - Arguments to filter Projectmeetings to count.
     * @example
     * // Count the number of Projectmeetings
     * const count = await prisma.projectmeeting.count({
     *   where: {
     *     // ... the filter for the Projectmeetings we want to count
     *   }
     * })
    **/
    count<T extends projectmeetingCountArgs>(
      args?: Subset<T, projectmeetingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectmeetingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projectmeeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectmeetingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectmeetingAggregateArgs>(args: Subset<T, ProjectmeetingAggregateArgs>): Prisma.PrismaPromise<GetProjectmeetingAggregateType<T>>

    /**
     * Group by Projectmeeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectmeetingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends projectmeetingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectmeetingGroupByArgs['orderBy'] }
        : { orderBy?: projectmeetingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, projectmeetingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectmeetingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the projectmeeting model
   */
  readonly fields: projectmeetingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for projectmeeting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectmeetingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    staff<T extends projectmeeting$staffArgs<ExtArgs> = {}>(args?: Subset<T, projectmeeting$staffArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    projectgroup<T extends projectmeeting$projectgroupArgs<ExtArgs> = {}>(args?: Subset<T, projectmeeting$projectgroupArgs<ExtArgs>>): Prisma__projectgroupClient<$Result.GetResult<Prisma.$projectgroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    projectmeetingattendance<T extends projectmeeting$projectmeetingattendanceArgs<ExtArgs> = {}>(args?: Subset<T, projectmeeting$projectmeetingattendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectmeetingattendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the projectmeeting model
   */
  interface projectmeetingFieldRefs {
    readonly projectmeetingid: FieldRef<"projectmeeting", 'Int'>
    readonly projectgroupid: FieldRef<"projectmeeting", 'Int'>
    readonly guidestaffid: FieldRef<"projectmeeting", 'Int'>
    readonly meetingdatetime: FieldRef<"projectmeeting", 'DateTime'>
    readonly meetingpurpose: FieldRef<"projectmeeting", 'String'>
    readonly meetinglocation: FieldRef<"projectmeeting", 'String'>
    readonly meetingnotes: FieldRef<"projectmeeting", 'String'>
    readonly meetingstatus: FieldRef<"projectmeeting", 'String'>
    readonly meetingstatusdescription: FieldRef<"projectmeeting", 'String'>
    readonly meetingstatusdatetime: FieldRef<"projectmeeting", 'DateTime'>
    readonly description: FieldRef<"projectmeeting", 'String'>
    readonly created: FieldRef<"projectmeeting", 'DateTime'>
    readonly modified: FieldRef<"projectmeeting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * projectmeeting findUnique
   */
  export type projectmeetingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmeeting
     */
    select?: projectmeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectmeeting
     */
    omit?: projectmeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmeetingInclude<ExtArgs> | null
    /**
     * Filter, which projectmeeting to fetch.
     */
    where: projectmeetingWhereUniqueInput
  }

  /**
   * projectmeeting findUniqueOrThrow
   */
  export type projectmeetingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmeeting
     */
    select?: projectmeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectmeeting
     */
    omit?: projectmeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmeetingInclude<ExtArgs> | null
    /**
     * Filter, which projectmeeting to fetch.
     */
    where: projectmeetingWhereUniqueInput
  }

  /**
   * projectmeeting findFirst
   */
  export type projectmeetingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmeeting
     */
    select?: projectmeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectmeeting
     */
    omit?: projectmeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmeetingInclude<ExtArgs> | null
    /**
     * Filter, which projectmeeting to fetch.
     */
    where?: projectmeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projectmeetings to fetch.
     */
    orderBy?: projectmeetingOrderByWithRelationInput | projectmeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projectmeetings.
     */
    cursor?: projectmeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projectmeetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projectmeetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projectmeetings.
     */
    distinct?: ProjectmeetingScalarFieldEnum | ProjectmeetingScalarFieldEnum[]
  }

  /**
   * projectmeeting findFirstOrThrow
   */
  export type projectmeetingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmeeting
     */
    select?: projectmeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectmeeting
     */
    omit?: projectmeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmeetingInclude<ExtArgs> | null
    /**
     * Filter, which projectmeeting to fetch.
     */
    where?: projectmeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projectmeetings to fetch.
     */
    orderBy?: projectmeetingOrderByWithRelationInput | projectmeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projectmeetings.
     */
    cursor?: projectmeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projectmeetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projectmeetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projectmeetings.
     */
    distinct?: ProjectmeetingScalarFieldEnum | ProjectmeetingScalarFieldEnum[]
  }

  /**
   * projectmeeting findMany
   */
  export type projectmeetingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmeeting
     */
    select?: projectmeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectmeeting
     */
    omit?: projectmeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmeetingInclude<ExtArgs> | null
    /**
     * Filter, which projectmeetings to fetch.
     */
    where?: projectmeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projectmeetings to fetch.
     */
    orderBy?: projectmeetingOrderByWithRelationInput | projectmeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projectmeetings.
     */
    cursor?: projectmeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projectmeetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projectmeetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projectmeetings.
     */
    distinct?: ProjectmeetingScalarFieldEnum | ProjectmeetingScalarFieldEnum[]
  }

  /**
   * projectmeeting create
   */
  export type projectmeetingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmeeting
     */
    select?: projectmeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectmeeting
     */
    omit?: projectmeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmeetingInclude<ExtArgs> | null
    /**
     * The data needed to create a projectmeeting.
     */
    data?: XOR<projectmeetingCreateInput, projectmeetingUncheckedCreateInput>
  }

  /**
   * projectmeeting createMany
   */
  export type projectmeetingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projectmeetings.
     */
    data: projectmeetingCreateManyInput | projectmeetingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * projectmeeting createManyAndReturn
   */
  export type projectmeetingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmeeting
     */
    select?: projectmeetingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projectmeeting
     */
    omit?: projectmeetingOmit<ExtArgs> | null
    /**
     * The data used to create many projectmeetings.
     */
    data: projectmeetingCreateManyInput | projectmeetingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmeetingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * projectmeeting update
   */
  export type projectmeetingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmeeting
     */
    select?: projectmeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectmeeting
     */
    omit?: projectmeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmeetingInclude<ExtArgs> | null
    /**
     * The data needed to update a projectmeeting.
     */
    data: XOR<projectmeetingUpdateInput, projectmeetingUncheckedUpdateInput>
    /**
     * Choose, which projectmeeting to update.
     */
    where: projectmeetingWhereUniqueInput
  }

  /**
   * projectmeeting updateMany
   */
  export type projectmeetingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projectmeetings.
     */
    data: XOR<projectmeetingUpdateManyMutationInput, projectmeetingUncheckedUpdateManyInput>
    /**
     * Filter which projectmeetings to update
     */
    where?: projectmeetingWhereInput
    /**
     * Limit how many projectmeetings to update.
     */
    limit?: number
  }

  /**
   * projectmeeting updateManyAndReturn
   */
  export type projectmeetingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmeeting
     */
    select?: projectmeetingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projectmeeting
     */
    omit?: projectmeetingOmit<ExtArgs> | null
    /**
     * The data used to update projectmeetings.
     */
    data: XOR<projectmeetingUpdateManyMutationInput, projectmeetingUncheckedUpdateManyInput>
    /**
     * Filter which projectmeetings to update
     */
    where?: projectmeetingWhereInput
    /**
     * Limit how many projectmeetings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmeetingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * projectmeeting upsert
   */
  export type projectmeetingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmeeting
     */
    select?: projectmeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectmeeting
     */
    omit?: projectmeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmeetingInclude<ExtArgs> | null
    /**
     * The filter to search for the projectmeeting to update in case it exists.
     */
    where: projectmeetingWhereUniqueInput
    /**
     * In case the projectmeeting found by the `where` argument doesn't exist, create a new projectmeeting with this data.
     */
    create: XOR<projectmeetingCreateInput, projectmeetingUncheckedCreateInput>
    /**
     * In case the projectmeeting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectmeetingUpdateInput, projectmeetingUncheckedUpdateInput>
  }

  /**
   * projectmeeting delete
   */
  export type projectmeetingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmeeting
     */
    select?: projectmeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectmeeting
     */
    omit?: projectmeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmeetingInclude<ExtArgs> | null
    /**
     * Filter which projectmeeting to delete.
     */
    where: projectmeetingWhereUniqueInput
  }

  /**
   * projectmeeting deleteMany
   */
  export type projectmeetingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projectmeetings to delete
     */
    where?: projectmeetingWhereInput
    /**
     * Limit how many projectmeetings to delete.
     */
    limit?: number
  }

  /**
   * projectmeeting.staff
   */
  export type projectmeeting$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    where?: staffWhereInput
  }

  /**
   * projectmeeting.projectgroup
   */
  export type projectmeeting$projectgroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectgroup
     */
    select?: projectgroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectgroup
     */
    omit?: projectgroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectgroupInclude<ExtArgs> | null
    where?: projectgroupWhereInput
  }

  /**
   * projectmeeting.projectmeetingattendance
   */
  export type projectmeeting$projectmeetingattendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmeetingattendance
     */
    select?: projectmeetingattendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectmeetingattendance
     */
    omit?: projectmeetingattendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmeetingattendanceInclude<ExtArgs> | null
    where?: projectmeetingattendanceWhereInput
    orderBy?: projectmeetingattendanceOrderByWithRelationInput | projectmeetingattendanceOrderByWithRelationInput[]
    cursor?: projectmeetingattendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectmeetingattendanceScalarFieldEnum | ProjectmeetingattendanceScalarFieldEnum[]
  }

  /**
   * projectmeeting without action
   */
  export type projectmeetingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmeeting
     */
    select?: projectmeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectmeeting
     */
    omit?: projectmeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmeetingInclude<ExtArgs> | null
  }


  /**
   * Model projectmeetingattendance
   */

  export type AggregateProjectmeetingattendance = {
    _count: ProjectmeetingattendanceCountAggregateOutputType | null
    _avg: ProjectmeetingattendanceAvgAggregateOutputType | null
    _sum: ProjectmeetingattendanceSumAggregateOutputType | null
    _min: ProjectmeetingattendanceMinAggregateOutputType | null
    _max: ProjectmeetingattendanceMaxAggregateOutputType | null
  }

  export type ProjectmeetingattendanceAvgAggregateOutputType = {
    projectmeetingattendanceid: number | null
    studentid: number | null
    projectmeetingid: number | null
  }

  export type ProjectmeetingattendanceSumAggregateOutputType = {
    projectmeetingattendanceid: number | null
    studentid: number | null
    projectmeetingid: number | null
  }

  export type ProjectmeetingattendanceMinAggregateOutputType = {
    projectmeetingattendanceid: number | null
    studentid: number | null
    projectmeetingid: number | null
    ispresent: boolean | null
    attendanceremarks: string | null
    description: string | null
    created: Date | null
    modified: Date | null
  }

  export type ProjectmeetingattendanceMaxAggregateOutputType = {
    projectmeetingattendanceid: number | null
    studentid: number | null
    projectmeetingid: number | null
    ispresent: boolean | null
    attendanceremarks: string | null
    description: string | null
    created: Date | null
    modified: Date | null
  }

  export type ProjectmeetingattendanceCountAggregateOutputType = {
    projectmeetingattendanceid: number
    studentid: number
    projectmeetingid: number
    ispresent: number
    attendanceremarks: number
    description: number
    created: number
    modified: number
    _all: number
  }


  export type ProjectmeetingattendanceAvgAggregateInputType = {
    projectmeetingattendanceid?: true
    studentid?: true
    projectmeetingid?: true
  }

  export type ProjectmeetingattendanceSumAggregateInputType = {
    projectmeetingattendanceid?: true
    studentid?: true
    projectmeetingid?: true
  }

  export type ProjectmeetingattendanceMinAggregateInputType = {
    projectmeetingattendanceid?: true
    studentid?: true
    projectmeetingid?: true
    ispresent?: true
    attendanceremarks?: true
    description?: true
    created?: true
    modified?: true
  }

  export type ProjectmeetingattendanceMaxAggregateInputType = {
    projectmeetingattendanceid?: true
    studentid?: true
    projectmeetingid?: true
    ispresent?: true
    attendanceremarks?: true
    description?: true
    created?: true
    modified?: true
  }

  export type ProjectmeetingattendanceCountAggregateInputType = {
    projectmeetingattendanceid?: true
    studentid?: true
    projectmeetingid?: true
    ispresent?: true
    attendanceremarks?: true
    description?: true
    created?: true
    modified?: true
    _all?: true
  }

  export type ProjectmeetingattendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projectmeetingattendance to aggregate.
     */
    where?: projectmeetingattendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projectmeetingattendances to fetch.
     */
    orderBy?: projectmeetingattendanceOrderByWithRelationInput | projectmeetingattendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectmeetingattendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projectmeetingattendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projectmeetingattendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projectmeetingattendances
    **/
    _count?: true | ProjectmeetingattendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectmeetingattendanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectmeetingattendanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectmeetingattendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectmeetingattendanceMaxAggregateInputType
  }

  export type GetProjectmeetingattendanceAggregateType<T extends ProjectmeetingattendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectmeetingattendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectmeetingattendance[P]>
      : GetScalarType<T[P], AggregateProjectmeetingattendance[P]>
  }




  export type projectmeetingattendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectmeetingattendanceWhereInput
    orderBy?: projectmeetingattendanceOrderByWithAggregationInput | projectmeetingattendanceOrderByWithAggregationInput[]
    by: ProjectmeetingattendanceScalarFieldEnum[] | ProjectmeetingattendanceScalarFieldEnum
    having?: projectmeetingattendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectmeetingattendanceCountAggregateInputType | true
    _avg?: ProjectmeetingattendanceAvgAggregateInputType
    _sum?: ProjectmeetingattendanceSumAggregateInputType
    _min?: ProjectmeetingattendanceMinAggregateInputType
    _max?: ProjectmeetingattendanceMaxAggregateInputType
  }

  export type ProjectmeetingattendanceGroupByOutputType = {
    projectmeetingattendanceid: number
    studentid: number | null
    projectmeetingid: number | null
    ispresent: boolean | null
    attendanceremarks: string | null
    description: string | null
    created: Date | null
    modified: Date | null
    _count: ProjectmeetingattendanceCountAggregateOutputType | null
    _avg: ProjectmeetingattendanceAvgAggregateOutputType | null
    _sum: ProjectmeetingattendanceSumAggregateOutputType | null
    _min: ProjectmeetingattendanceMinAggregateOutputType | null
    _max: ProjectmeetingattendanceMaxAggregateOutputType | null
  }

  type GetProjectmeetingattendanceGroupByPayload<T extends projectmeetingattendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectmeetingattendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectmeetingattendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectmeetingattendanceGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectmeetingattendanceGroupByOutputType[P]>
        }
      >
    >


  export type projectmeetingattendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectmeetingattendanceid?: boolean
    studentid?: boolean
    projectmeetingid?: boolean
    ispresent?: boolean
    attendanceremarks?: boolean
    description?: boolean
    created?: boolean
    modified?: boolean
    projectmeeting?: boolean | projectmeetingattendance$projectmeetingArgs<ExtArgs>
    student?: boolean | projectmeetingattendance$studentArgs<ExtArgs>
  }, ExtArgs["result"]["projectmeetingattendance"]>

  export type projectmeetingattendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectmeetingattendanceid?: boolean
    studentid?: boolean
    projectmeetingid?: boolean
    ispresent?: boolean
    attendanceremarks?: boolean
    description?: boolean
    created?: boolean
    modified?: boolean
    projectmeeting?: boolean | projectmeetingattendance$projectmeetingArgs<ExtArgs>
    student?: boolean | projectmeetingattendance$studentArgs<ExtArgs>
  }, ExtArgs["result"]["projectmeetingattendance"]>

  export type projectmeetingattendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectmeetingattendanceid?: boolean
    studentid?: boolean
    projectmeetingid?: boolean
    ispresent?: boolean
    attendanceremarks?: boolean
    description?: boolean
    created?: boolean
    modified?: boolean
    projectmeeting?: boolean | projectmeetingattendance$projectmeetingArgs<ExtArgs>
    student?: boolean | projectmeetingattendance$studentArgs<ExtArgs>
  }, ExtArgs["result"]["projectmeetingattendance"]>

  export type projectmeetingattendanceSelectScalar = {
    projectmeetingattendanceid?: boolean
    studentid?: boolean
    projectmeetingid?: boolean
    ispresent?: boolean
    attendanceremarks?: boolean
    description?: boolean
    created?: boolean
    modified?: boolean
  }

  export type projectmeetingattendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"projectmeetingattendanceid" | "studentid" | "projectmeetingid" | "ispresent" | "attendanceremarks" | "description" | "created" | "modified", ExtArgs["result"]["projectmeetingattendance"]>
  export type projectmeetingattendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectmeeting?: boolean | projectmeetingattendance$projectmeetingArgs<ExtArgs>
    student?: boolean | projectmeetingattendance$studentArgs<ExtArgs>
  }
  export type projectmeetingattendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectmeeting?: boolean | projectmeetingattendance$projectmeetingArgs<ExtArgs>
    student?: boolean | projectmeetingattendance$studentArgs<ExtArgs>
  }
  export type projectmeetingattendanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectmeeting?: boolean | projectmeetingattendance$projectmeetingArgs<ExtArgs>
    student?: boolean | projectmeetingattendance$studentArgs<ExtArgs>
  }

  export type $projectmeetingattendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "projectmeetingattendance"
    objects: {
      projectmeeting: Prisma.$projectmeetingPayload<ExtArgs> | null
      student: Prisma.$studentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      projectmeetingattendanceid: number
      studentid: number | null
      projectmeetingid: number | null
      ispresent: boolean | null
      attendanceremarks: string | null
      description: string | null
      created: Date | null
      modified: Date | null
    }, ExtArgs["result"]["projectmeetingattendance"]>
    composites: {}
  }

  type projectmeetingattendanceGetPayload<S extends boolean | null | undefined | projectmeetingattendanceDefaultArgs> = $Result.GetResult<Prisma.$projectmeetingattendancePayload, S>

  type projectmeetingattendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<projectmeetingattendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectmeetingattendanceCountAggregateInputType | true
    }

  export interface projectmeetingattendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['projectmeetingattendance'], meta: { name: 'projectmeetingattendance' } }
    /**
     * Find zero or one Projectmeetingattendance that matches the filter.
     * @param {projectmeetingattendanceFindUniqueArgs} args - Arguments to find a Projectmeetingattendance
     * @example
     * // Get one Projectmeetingattendance
     * const projectmeetingattendance = await prisma.projectmeetingattendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectmeetingattendanceFindUniqueArgs>(args: SelectSubset<T, projectmeetingattendanceFindUniqueArgs<ExtArgs>>): Prisma__projectmeetingattendanceClient<$Result.GetResult<Prisma.$projectmeetingattendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Projectmeetingattendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {projectmeetingattendanceFindUniqueOrThrowArgs} args - Arguments to find a Projectmeetingattendance
     * @example
     * // Get one Projectmeetingattendance
     * const projectmeetingattendance = await prisma.projectmeetingattendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectmeetingattendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, projectmeetingattendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectmeetingattendanceClient<$Result.GetResult<Prisma.$projectmeetingattendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projectmeetingattendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectmeetingattendanceFindFirstArgs} args - Arguments to find a Projectmeetingattendance
     * @example
     * // Get one Projectmeetingattendance
     * const projectmeetingattendance = await prisma.projectmeetingattendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectmeetingattendanceFindFirstArgs>(args?: SelectSubset<T, projectmeetingattendanceFindFirstArgs<ExtArgs>>): Prisma__projectmeetingattendanceClient<$Result.GetResult<Prisma.$projectmeetingattendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projectmeetingattendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectmeetingattendanceFindFirstOrThrowArgs} args - Arguments to find a Projectmeetingattendance
     * @example
     * // Get one Projectmeetingattendance
     * const projectmeetingattendance = await prisma.projectmeetingattendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectmeetingattendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, projectmeetingattendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectmeetingattendanceClient<$Result.GetResult<Prisma.$projectmeetingattendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projectmeetingattendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectmeetingattendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projectmeetingattendances
     * const projectmeetingattendances = await prisma.projectmeetingattendance.findMany()
     * 
     * // Get first 10 Projectmeetingattendances
     * const projectmeetingattendances = await prisma.projectmeetingattendance.findMany({ take: 10 })
     * 
     * // Only select the `projectmeetingattendanceid`
     * const projectmeetingattendanceWithProjectmeetingattendanceidOnly = await prisma.projectmeetingattendance.findMany({ select: { projectmeetingattendanceid: true } })
     * 
     */
    findMany<T extends projectmeetingattendanceFindManyArgs>(args?: SelectSubset<T, projectmeetingattendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectmeetingattendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Projectmeetingattendance.
     * @param {projectmeetingattendanceCreateArgs} args - Arguments to create a Projectmeetingattendance.
     * @example
     * // Create one Projectmeetingattendance
     * const Projectmeetingattendance = await prisma.projectmeetingattendance.create({
     *   data: {
     *     // ... data to create a Projectmeetingattendance
     *   }
     * })
     * 
     */
    create<T extends projectmeetingattendanceCreateArgs>(args: SelectSubset<T, projectmeetingattendanceCreateArgs<ExtArgs>>): Prisma__projectmeetingattendanceClient<$Result.GetResult<Prisma.$projectmeetingattendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projectmeetingattendances.
     * @param {projectmeetingattendanceCreateManyArgs} args - Arguments to create many Projectmeetingattendances.
     * @example
     * // Create many Projectmeetingattendances
     * const projectmeetingattendance = await prisma.projectmeetingattendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projectmeetingattendanceCreateManyArgs>(args?: SelectSubset<T, projectmeetingattendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projectmeetingattendances and returns the data saved in the database.
     * @param {projectmeetingattendanceCreateManyAndReturnArgs} args - Arguments to create many Projectmeetingattendances.
     * @example
     * // Create many Projectmeetingattendances
     * const projectmeetingattendance = await prisma.projectmeetingattendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projectmeetingattendances and only return the `projectmeetingattendanceid`
     * const projectmeetingattendanceWithProjectmeetingattendanceidOnly = await prisma.projectmeetingattendance.createManyAndReturn({
     *   select: { projectmeetingattendanceid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends projectmeetingattendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, projectmeetingattendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectmeetingattendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Projectmeetingattendance.
     * @param {projectmeetingattendanceDeleteArgs} args - Arguments to delete one Projectmeetingattendance.
     * @example
     * // Delete one Projectmeetingattendance
     * const Projectmeetingattendance = await prisma.projectmeetingattendance.delete({
     *   where: {
     *     // ... filter to delete one Projectmeetingattendance
     *   }
     * })
     * 
     */
    delete<T extends projectmeetingattendanceDeleteArgs>(args: SelectSubset<T, projectmeetingattendanceDeleteArgs<ExtArgs>>): Prisma__projectmeetingattendanceClient<$Result.GetResult<Prisma.$projectmeetingattendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Projectmeetingattendance.
     * @param {projectmeetingattendanceUpdateArgs} args - Arguments to update one Projectmeetingattendance.
     * @example
     * // Update one Projectmeetingattendance
     * const projectmeetingattendance = await prisma.projectmeetingattendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projectmeetingattendanceUpdateArgs>(args: SelectSubset<T, projectmeetingattendanceUpdateArgs<ExtArgs>>): Prisma__projectmeetingattendanceClient<$Result.GetResult<Prisma.$projectmeetingattendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projectmeetingattendances.
     * @param {projectmeetingattendanceDeleteManyArgs} args - Arguments to filter Projectmeetingattendances to delete.
     * @example
     * // Delete a few Projectmeetingattendances
     * const { count } = await prisma.projectmeetingattendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projectmeetingattendanceDeleteManyArgs>(args?: SelectSubset<T, projectmeetingattendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projectmeetingattendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectmeetingattendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projectmeetingattendances
     * const projectmeetingattendance = await prisma.projectmeetingattendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projectmeetingattendanceUpdateManyArgs>(args: SelectSubset<T, projectmeetingattendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projectmeetingattendances and returns the data updated in the database.
     * @param {projectmeetingattendanceUpdateManyAndReturnArgs} args - Arguments to update many Projectmeetingattendances.
     * @example
     * // Update many Projectmeetingattendances
     * const projectmeetingattendance = await prisma.projectmeetingattendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projectmeetingattendances and only return the `projectmeetingattendanceid`
     * const projectmeetingattendanceWithProjectmeetingattendanceidOnly = await prisma.projectmeetingattendance.updateManyAndReturn({
     *   select: { projectmeetingattendanceid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends projectmeetingattendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, projectmeetingattendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectmeetingattendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Projectmeetingattendance.
     * @param {projectmeetingattendanceUpsertArgs} args - Arguments to update or create a Projectmeetingattendance.
     * @example
     * // Update or create a Projectmeetingattendance
     * const projectmeetingattendance = await prisma.projectmeetingattendance.upsert({
     *   create: {
     *     // ... data to create a Projectmeetingattendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projectmeetingattendance we want to update
     *   }
     * })
     */
    upsert<T extends projectmeetingattendanceUpsertArgs>(args: SelectSubset<T, projectmeetingattendanceUpsertArgs<ExtArgs>>): Prisma__projectmeetingattendanceClient<$Result.GetResult<Prisma.$projectmeetingattendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projectmeetingattendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectmeetingattendanceCountArgs} args - Arguments to filter Projectmeetingattendances to count.
     * @example
     * // Count the number of Projectmeetingattendances
     * const count = await prisma.projectmeetingattendance.count({
     *   where: {
     *     // ... the filter for the Projectmeetingattendances we want to count
     *   }
     * })
    **/
    count<T extends projectmeetingattendanceCountArgs>(
      args?: Subset<T, projectmeetingattendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectmeetingattendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projectmeetingattendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectmeetingattendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectmeetingattendanceAggregateArgs>(args: Subset<T, ProjectmeetingattendanceAggregateArgs>): Prisma.PrismaPromise<GetProjectmeetingattendanceAggregateType<T>>

    /**
     * Group by Projectmeetingattendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectmeetingattendanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends projectmeetingattendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectmeetingattendanceGroupByArgs['orderBy'] }
        : { orderBy?: projectmeetingattendanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, projectmeetingattendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectmeetingattendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the projectmeetingattendance model
   */
  readonly fields: projectmeetingattendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for projectmeetingattendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectmeetingattendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectmeeting<T extends projectmeetingattendance$projectmeetingArgs<ExtArgs> = {}>(args?: Subset<T, projectmeetingattendance$projectmeetingArgs<ExtArgs>>): Prisma__projectmeetingClient<$Result.GetResult<Prisma.$projectmeetingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    student<T extends projectmeetingattendance$studentArgs<ExtArgs> = {}>(args?: Subset<T, projectmeetingattendance$studentArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the projectmeetingattendance model
   */
  interface projectmeetingattendanceFieldRefs {
    readonly projectmeetingattendanceid: FieldRef<"projectmeetingattendance", 'Int'>
    readonly studentid: FieldRef<"projectmeetingattendance", 'Int'>
    readonly projectmeetingid: FieldRef<"projectmeetingattendance", 'Int'>
    readonly ispresent: FieldRef<"projectmeetingattendance", 'Boolean'>
    readonly attendanceremarks: FieldRef<"projectmeetingattendance", 'String'>
    readonly description: FieldRef<"projectmeetingattendance", 'String'>
    readonly created: FieldRef<"projectmeetingattendance", 'DateTime'>
    readonly modified: FieldRef<"projectmeetingattendance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * projectmeetingattendance findUnique
   */
  export type projectmeetingattendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmeetingattendance
     */
    select?: projectmeetingattendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectmeetingattendance
     */
    omit?: projectmeetingattendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmeetingattendanceInclude<ExtArgs> | null
    /**
     * Filter, which projectmeetingattendance to fetch.
     */
    where: projectmeetingattendanceWhereUniqueInput
  }

  /**
   * projectmeetingattendance findUniqueOrThrow
   */
  export type projectmeetingattendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmeetingattendance
     */
    select?: projectmeetingattendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectmeetingattendance
     */
    omit?: projectmeetingattendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmeetingattendanceInclude<ExtArgs> | null
    /**
     * Filter, which projectmeetingattendance to fetch.
     */
    where: projectmeetingattendanceWhereUniqueInput
  }

  /**
   * projectmeetingattendance findFirst
   */
  export type projectmeetingattendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmeetingattendance
     */
    select?: projectmeetingattendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectmeetingattendance
     */
    omit?: projectmeetingattendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmeetingattendanceInclude<ExtArgs> | null
    /**
     * Filter, which projectmeetingattendance to fetch.
     */
    where?: projectmeetingattendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projectmeetingattendances to fetch.
     */
    orderBy?: projectmeetingattendanceOrderByWithRelationInput | projectmeetingattendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projectmeetingattendances.
     */
    cursor?: projectmeetingattendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projectmeetingattendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projectmeetingattendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projectmeetingattendances.
     */
    distinct?: ProjectmeetingattendanceScalarFieldEnum | ProjectmeetingattendanceScalarFieldEnum[]
  }

  /**
   * projectmeetingattendance findFirstOrThrow
   */
  export type projectmeetingattendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmeetingattendance
     */
    select?: projectmeetingattendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectmeetingattendance
     */
    omit?: projectmeetingattendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmeetingattendanceInclude<ExtArgs> | null
    /**
     * Filter, which projectmeetingattendance to fetch.
     */
    where?: projectmeetingattendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projectmeetingattendances to fetch.
     */
    orderBy?: projectmeetingattendanceOrderByWithRelationInput | projectmeetingattendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projectmeetingattendances.
     */
    cursor?: projectmeetingattendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projectmeetingattendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projectmeetingattendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projectmeetingattendances.
     */
    distinct?: ProjectmeetingattendanceScalarFieldEnum | ProjectmeetingattendanceScalarFieldEnum[]
  }

  /**
   * projectmeetingattendance findMany
   */
  export type projectmeetingattendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmeetingattendance
     */
    select?: projectmeetingattendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectmeetingattendance
     */
    omit?: projectmeetingattendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmeetingattendanceInclude<ExtArgs> | null
    /**
     * Filter, which projectmeetingattendances to fetch.
     */
    where?: projectmeetingattendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projectmeetingattendances to fetch.
     */
    orderBy?: projectmeetingattendanceOrderByWithRelationInput | projectmeetingattendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projectmeetingattendances.
     */
    cursor?: projectmeetingattendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projectmeetingattendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projectmeetingattendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projectmeetingattendances.
     */
    distinct?: ProjectmeetingattendanceScalarFieldEnum | ProjectmeetingattendanceScalarFieldEnum[]
  }

  /**
   * projectmeetingattendance create
   */
  export type projectmeetingattendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmeetingattendance
     */
    select?: projectmeetingattendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectmeetingattendance
     */
    omit?: projectmeetingattendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmeetingattendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a projectmeetingattendance.
     */
    data?: XOR<projectmeetingattendanceCreateInput, projectmeetingattendanceUncheckedCreateInput>
  }

  /**
   * projectmeetingattendance createMany
   */
  export type projectmeetingattendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projectmeetingattendances.
     */
    data: projectmeetingattendanceCreateManyInput | projectmeetingattendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * projectmeetingattendance createManyAndReturn
   */
  export type projectmeetingattendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmeetingattendance
     */
    select?: projectmeetingattendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projectmeetingattendance
     */
    omit?: projectmeetingattendanceOmit<ExtArgs> | null
    /**
     * The data used to create many projectmeetingattendances.
     */
    data: projectmeetingattendanceCreateManyInput | projectmeetingattendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmeetingattendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * projectmeetingattendance update
   */
  export type projectmeetingattendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmeetingattendance
     */
    select?: projectmeetingattendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectmeetingattendance
     */
    omit?: projectmeetingattendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmeetingattendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a projectmeetingattendance.
     */
    data: XOR<projectmeetingattendanceUpdateInput, projectmeetingattendanceUncheckedUpdateInput>
    /**
     * Choose, which projectmeetingattendance to update.
     */
    where: projectmeetingattendanceWhereUniqueInput
  }

  /**
   * projectmeetingattendance updateMany
   */
  export type projectmeetingattendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projectmeetingattendances.
     */
    data: XOR<projectmeetingattendanceUpdateManyMutationInput, projectmeetingattendanceUncheckedUpdateManyInput>
    /**
     * Filter which projectmeetingattendances to update
     */
    where?: projectmeetingattendanceWhereInput
    /**
     * Limit how many projectmeetingattendances to update.
     */
    limit?: number
  }

  /**
   * projectmeetingattendance updateManyAndReturn
   */
  export type projectmeetingattendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmeetingattendance
     */
    select?: projectmeetingattendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projectmeetingattendance
     */
    omit?: projectmeetingattendanceOmit<ExtArgs> | null
    /**
     * The data used to update projectmeetingattendances.
     */
    data: XOR<projectmeetingattendanceUpdateManyMutationInput, projectmeetingattendanceUncheckedUpdateManyInput>
    /**
     * Filter which projectmeetingattendances to update
     */
    where?: projectmeetingattendanceWhereInput
    /**
     * Limit how many projectmeetingattendances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmeetingattendanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * projectmeetingattendance upsert
   */
  export type projectmeetingattendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmeetingattendance
     */
    select?: projectmeetingattendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectmeetingattendance
     */
    omit?: projectmeetingattendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmeetingattendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the projectmeetingattendance to update in case it exists.
     */
    where: projectmeetingattendanceWhereUniqueInput
    /**
     * In case the projectmeetingattendance found by the `where` argument doesn't exist, create a new projectmeetingattendance with this data.
     */
    create: XOR<projectmeetingattendanceCreateInput, projectmeetingattendanceUncheckedCreateInput>
    /**
     * In case the projectmeetingattendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectmeetingattendanceUpdateInput, projectmeetingattendanceUncheckedUpdateInput>
  }

  /**
   * projectmeetingattendance delete
   */
  export type projectmeetingattendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmeetingattendance
     */
    select?: projectmeetingattendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectmeetingattendance
     */
    omit?: projectmeetingattendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmeetingattendanceInclude<ExtArgs> | null
    /**
     * Filter which projectmeetingattendance to delete.
     */
    where: projectmeetingattendanceWhereUniqueInput
  }

  /**
   * projectmeetingattendance deleteMany
   */
  export type projectmeetingattendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projectmeetingattendances to delete
     */
    where?: projectmeetingattendanceWhereInput
    /**
     * Limit how many projectmeetingattendances to delete.
     */
    limit?: number
  }

  /**
   * projectmeetingattendance.projectmeeting
   */
  export type projectmeetingattendance$projectmeetingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmeeting
     */
    select?: projectmeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectmeeting
     */
    omit?: projectmeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmeetingInclude<ExtArgs> | null
    where?: projectmeetingWhereInput
  }

  /**
   * projectmeetingattendance.student
   */
  export type projectmeetingattendance$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    where?: studentWhereInput
  }

  /**
   * projectmeetingattendance without action
   */
  export type projectmeetingattendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmeetingattendance
     */
    select?: projectmeetingattendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectmeetingattendance
     */
    omit?: projectmeetingattendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmeetingattendanceInclude<ExtArgs> | null
  }


  /**
   * Model projecttype
   */

  export type AggregateProjecttype = {
    _count: ProjecttypeCountAggregateOutputType | null
    _avg: ProjecttypeAvgAggregateOutputType | null
    _sum: ProjecttypeSumAggregateOutputType | null
    _min: ProjecttypeMinAggregateOutputType | null
    _max: ProjecttypeMaxAggregateOutputType | null
  }

  export type ProjecttypeAvgAggregateOutputType = {
    projecttypeid: number | null
  }

  export type ProjecttypeSumAggregateOutputType = {
    projecttypeid: number | null
  }

  export type ProjecttypeMinAggregateOutputType = {
    projecttypeid: number | null
    projecttypename: string | null
    description: string | null
    created: Date | null
    modified: Date | null
  }

  export type ProjecttypeMaxAggregateOutputType = {
    projecttypeid: number | null
    projecttypename: string | null
    description: string | null
    created: Date | null
    modified: Date | null
  }

  export type ProjecttypeCountAggregateOutputType = {
    projecttypeid: number
    projecttypename: number
    description: number
    created: number
    modified: number
    _all: number
  }


  export type ProjecttypeAvgAggregateInputType = {
    projecttypeid?: true
  }

  export type ProjecttypeSumAggregateInputType = {
    projecttypeid?: true
  }

  export type ProjecttypeMinAggregateInputType = {
    projecttypeid?: true
    projecttypename?: true
    description?: true
    created?: true
    modified?: true
  }

  export type ProjecttypeMaxAggregateInputType = {
    projecttypeid?: true
    projecttypename?: true
    description?: true
    created?: true
    modified?: true
  }

  export type ProjecttypeCountAggregateInputType = {
    projecttypeid?: true
    projecttypename?: true
    description?: true
    created?: true
    modified?: true
    _all?: true
  }

  export type ProjecttypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projecttype to aggregate.
     */
    where?: projecttypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projecttypes to fetch.
     */
    orderBy?: projecttypeOrderByWithRelationInput | projecttypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projecttypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projecttypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projecttypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projecttypes
    **/
    _count?: true | ProjecttypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjecttypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjecttypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjecttypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjecttypeMaxAggregateInputType
  }

  export type GetProjecttypeAggregateType<T extends ProjecttypeAggregateArgs> = {
        [P in keyof T & keyof AggregateProjecttype]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjecttype[P]>
      : GetScalarType<T[P], AggregateProjecttype[P]>
  }




  export type projecttypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projecttypeWhereInput
    orderBy?: projecttypeOrderByWithAggregationInput | projecttypeOrderByWithAggregationInput[]
    by: ProjecttypeScalarFieldEnum[] | ProjecttypeScalarFieldEnum
    having?: projecttypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjecttypeCountAggregateInputType | true
    _avg?: ProjecttypeAvgAggregateInputType
    _sum?: ProjecttypeSumAggregateInputType
    _min?: ProjecttypeMinAggregateInputType
    _max?: ProjecttypeMaxAggregateInputType
  }

  export type ProjecttypeGroupByOutputType = {
    projecttypeid: number
    projecttypename: string
    description: string | null
    created: Date | null
    modified: Date | null
    _count: ProjecttypeCountAggregateOutputType | null
    _avg: ProjecttypeAvgAggregateOutputType | null
    _sum: ProjecttypeSumAggregateOutputType | null
    _min: ProjecttypeMinAggregateOutputType | null
    _max: ProjecttypeMaxAggregateOutputType | null
  }

  type GetProjecttypeGroupByPayload<T extends projecttypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjecttypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjecttypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjecttypeGroupByOutputType[P]>
            : GetScalarType<T[P], ProjecttypeGroupByOutputType[P]>
        }
      >
    >


  export type projecttypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projecttypeid?: boolean
    projecttypename?: boolean
    description?: boolean
    created?: boolean
    modified?: boolean
    projectgroup?: boolean | projecttype$projectgroupArgs<ExtArgs>
    _count?: boolean | ProjecttypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projecttype"]>

  export type projecttypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projecttypeid?: boolean
    projecttypename?: boolean
    description?: boolean
    created?: boolean
    modified?: boolean
  }, ExtArgs["result"]["projecttype"]>

  export type projecttypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projecttypeid?: boolean
    projecttypename?: boolean
    description?: boolean
    created?: boolean
    modified?: boolean
  }, ExtArgs["result"]["projecttype"]>

  export type projecttypeSelectScalar = {
    projecttypeid?: boolean
    projecttypename?: boolean
    description?: boolean
    created?: boolean
    modified?: boolean
  }

  export type projecttypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"projecttypeid" | "projecttypename" | "description" | "created" | "modified", ExtArgs["result"]["projecttype"]>
  export type projecttypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectgroup?: boolean | projecttype$projectgroupArgs<ExtArgs>
    _count?: boolean | ProjecttypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type projecttypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type projecttypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $projecttypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "projecttype"
    objects: {
      projectgroup: Prisma.$projectgroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      projecttypeid: number
      projecttypename: string
      description: string | null
      created: Date | null
      modified: Date | null
    }, ExtArgs["result"]["projecttype"]>
    composites: {}
  }

  type projecttypeGetPayload<S extends boolean | null | undefined | projecttypeDefaultArgs> = $Result.GetResult<Prisma.$projecttypePayload, S>

  type projecttypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<projecttypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjecttypeCountAggregateInputType | true
    }

  export interface projecttypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['projecttype'], meta: { name: 'projecttype' } }
    /**
     * Find zero or one Projecttype that matches the filter.
     * @param {projecttypeFindUniqueArgs} args - Arguments to find a Projecttype
     * @example
     * // Get one Projecttype
     * const projecttype = await prisma.projecttype.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projecttypeFindUniqueArgs>(args: SelectSubset<T, projecttypeFindUniqueArgs<ExtArgs>>): Prisma__projecttypeClient<$Result.GetResult<Prisma.$projecttypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Projecttype that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {projecttypeFindUniqueOrThrowArgs} args - Arguments to find a Projecttype
     * @example
     * // Get one Projecttype
     * const projecttype = await prisma.projecttype.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projecttypeFindUniqueOrThrowArgs>(args: SelectSubset<T, projecttypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projecttypeClient<$Result.GetResult<Prisma.$projecttypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projecttype that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projecttypeFindFirstArgs} args - Arguments to find a Projecttype
     * @example
     * // Get one Projecttype
     * const projecttype = await prisma.projecttype.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projecttypeFindFirstArgs>(args?: SelectSubset<T, projecttypeFindFirstArgs<ExtArgs>>): Prisma__projecttypeClient<$Result.GetResult<Prisma.$projecttypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projecttype that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projecttypeFindFirstOrThrowArgs} args - Arguments to find a Projecttype
     * @example
     * // Get one Projecttype
     * const projecttype = await prisma.projecttype.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projecttypeFindFirstOrThrowArgs>(args?: SelectSubset<T, projecttypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__projecttypeClient<$Result.GetResult<Prisma.$projecttypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projecttypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projecttypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projecttypes
     * const projecttypes = await prisma.projecttype.findMany()
     * 
     * // Get first 10 Projecttypes
     * const projecttypes = await prisma.projecttype.findMany({ take: 10 })
     * 
     * // Only select the `projecttypeid`
     * const projecttypeWithProjecttypeidOnly = await prisma.projecttype.findMany({ select: { projecttypeid: true } })
     * 
     */
    findMany<T extends projecttypeFindManyArgs>(args?: SelectSubset<T, projecttypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projecttypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Projecttype.
     * @param {projecttypeCreateArgs} args - Arguments to create a Projecttype.
     * @example
     * // Create one Projecttype
     * const Projecttype = await prisma.projecttype.create({
     *   data: {
     *     // ... data to create a Projecttype
     *   }
     * })
     * 
     */
    create<T extends projecttypeCreateArgs>(args: SelectSubset<T, projecttypeCreateArgs<ExtArgs>>): Prisma__projecttypeClient<$Result.GetResult<Prisma.$projecttypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projecttypes.
     * @param {projecttypeCreateManyArgs} args - Arguments to create many Projecttypes.
     * @example
     * // Create many Projecttypes
     * const projecttype = await prisma.projecttype.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projecttypeCreateManyArgs>(args?: SelectSubset<T, projecttypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projecttypes and returns the data saved in the database.
     * @param {projecttypeCreateManyAndReturnArgs} args - Arguments to create many Projecttypes.
     * @example
     * // Create many Projecttypes
     * const projecttype = await prisma.projecttype.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projecttypes and only return the `projecttypeid`
     * const projecttypeWithProjecttypeidOnly = await prisma.projecttype.createManyAndReturn({
     *   select: { projecttypeid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends projecttypeCreateManyAndReturnArgs>(args?: SelectSubset<T, projecttypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projecttypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Projecttype.
     * @param {projecttypeDeleteArgs} args - Arguments to delete one Projecttype.
     * @example
     * // Delete one Projecttype
     * const Projecttype = await prisma.projecttype.delete({
     *   where: {
     *     // ... filter to delete one Projecttype
     *   }
     * })
     * 
     */
    delete<T extends projecttypeDeleteArgs>(args: SelectSubset<T, projecttypeDeleteArgs<ExtArgs>>): Prisma__projecttypeClient<$Result.GetResult<Prisma.$projecttypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Projecttype.
     * @param {projecttypeUpdateArgs} args - Arguments to update one Projecttype.
     * @example
     * // Update one Projecttype
     * const projecttype = await prisma.projecttype.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projecttypeUpdateArgs>(args: SelectSubset<T, projecttypeUpdateArgs<ExtArgs>>): Prisma__projecttypeClient<$Result.GetResult<Prisma.$projecttypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projecttypes.
     * @param {projecttypeDeleteManyArgs} args - Arguments to filter Projecttypes to delete.
     * @example
     * // Delete a few Projecttypes
     * const { count } = await prisma.projecttype.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projecttypeDeleteManyArgs>(args?: SelectSubset<T, projecttypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projecttypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projecttypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projecttypes
     * const projecttype = await prisma.projecttype.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projecttypeUpdateManyArgs>(args: SelectSubset<T, projecttypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projecttypes and returns the data updated in the database.
     * @param {projecttypeUpdateManyAndReturnArgs} args - Arguments to update many Projecttypes.
     * @example
     * // Update many Projecttypes
     * const projecttype = await prisma.projecttype.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projecttypes and only return the `projecttypeid`
     * const projecttypeWithProjecttypeidOnly = await prisma.projecttype.updateManyAndReturn({
     *   select: { projecttypeid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends projecttypeUpdateManyAndReturnArgs>(args: SelectSubset<T, projecttypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projecttypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Projecttype.
     * @param {projecttypeUpsertArgs} args - Arguments to update or create a Projecttype.
     * @example
     * // Update or create a Projecttype
     * const projecttype = await prisma.projecttype.upsert({
     *   create: {
     *     // ... data to create a Projecttype
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projecttype we want to update
     *   }
     * })
     */
    upsert<T extends projecttypeUpsertArgs>(args: SelectSubset<T, projecttypeUpsertArgs<ExtArgs>>): Prisma__projecttypeClient<$Result.GetResult<Prisma.$projecttypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projecttypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projecttypeCountArgs} args - Arguments to filter Projecttypes to count.
     * @example
     * // Count the number of Projecttypes
     * const count = await prisma.projecttype.count({
     *   where: {
     *     // ... the filter for the Projecttypes we want to count
     *   }
     * })
    **/
    count<T extends projecttypeCountArgs>(
      args?: Subset<T, projecttypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjecttypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projecttype.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjecttypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjecttypeAggregateArgs>(args: Subset<T, ProjecttypeAggregateArgs>): Prisma.PrismaPromise<GetProjecttypeAggregateType<T>>

    /**
     * Group by Projecttype.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projecttypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends projecttypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projecttypeGroupByArgs['orderBy'] }
        : { orderBy?: projecttypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, projecttypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjecttypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the projecttype model
   */
  readonly fields: projecttypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for projecttype.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projecttypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectgroup<T extends projecttype$projectgroupArgs<ExtArgs> = {}>(args?: Subset<T, projecttype$projectgroupArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectgroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the projecttype model
   */
  interface projecttypeFieldRefs {
    readonly projecttypeid: FieldRef<"projecttype", 'Int'>
    readonly projecttypename: FieldRef<"projecttype", 'String'>
    readonly description: FieldRef<"projecttype", 'String'>
    readonly created: FieldRef<"projecttype", 'DateTime'>
    readonly modified: FieldRef<"projecttype", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * projecttype findUnique
   */
  export type projecttypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projecttype
     */
    select?: projecttypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projecttype
     */
    omit?: projecttypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projecttypeInclude<ExtArgs> | null
    /**
     * Filter, which projecttype to fetch.
     */
    where: projecttypeWhereUniqueInput
  }

  /**
   * projecttype findUniqueOrThrow
   */
  export type projecttypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projecttype
     */
    select?: projecttypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projecttype
     */
    omit?: projecttypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projecttypeInclude<ExtArgs> | null
    /**
     * Filter, which projecttype to fetch.
     */
    where: projecttypeWhereUniqueInput
  }

  /**
   * projecttype findFirst
   */
  export type projecttypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projecttype
     */
    select?: projecttypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projecttype
     */
    omit?: projecttypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projecttypeInclude<ExtArgs> | null
    /**
     * Filter, which projecttype to fetch.
     */
    where?: projecttypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projecttypes to fetch.
     */
    orderBy?: projecttypeOrderByWithRelationInput | projecttypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projecttypes.
     */
    cursor?: projecttypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projecttypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projecttypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projecttypes.
     */
    distinct?: ProjecttypeScalarFieldEnum | ProjecttypeScalarFieldEnum[]
  }

  /**
   * projecttype findFirstOrThrow
   */
  export type projecttypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projecttype
     */
    select?: projecttypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projecttype
     */
    omit?: projecttypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projecttypeInclude<ExtArgs> | null
    /**
     * Filter, which projecttype to fetch.
     */
    where?: projecttypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projecttypes to fetch.
     */
    orderBy?: projecttypeOrderByWithRelationInput | projecttypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projecttypes.
     */
    cursor?: projecttypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projecttypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projecttypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projecttypes.
     */
    distinct?: ProjecttypeScalarFieldEnum | ProjecttypeScalarFieldEnum[]
  }

  /**
   * projecttype findMany
   */
  export type projecttypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projecttype
     */
    select?: projecttypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projecttype
     */
    omit?: projecttypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projecttypeInclude<ExtArgs> | null
    /**
     * Filter, which projecttypes to fetch.
     */
    where?: projecttypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projecttypes to fetch.
     */
    orderBy?: projecttypeOrderByWithRelationInput | projecttypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projecttypes.
     */
    cursor?: projecttypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projecttypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projecttypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projecttypes.
     */
    distinct?: ProjecttypeScalarFieldEnum | ProjecttypeScalarFieldEnum[]
  }

  /**
   * projecttype create
   */
  export type projecttypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projecttype
     */
    select?: projecttypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projecttype
     */
    omit?: projecttypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projecttypeInclude<ExtArgs> | null
    /**
     * The data needed to create a projecttype.
     */
    data: XOR<projecttypeCreateInput, projecttypeUncheckedCreateInput>
  }

  /**
   * projecttype createMany
   */
  export type projecttypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projecttypes.
     */
    data: projecttypeCreateManyInput | projecttypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * projecttype createManyAndReturn
   */
  export type projecttypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projecttype
     */
    select?: projecttypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projecttype
     */
    omit?: projecttypeOmit<ExtArgs> | null
    /**
     * The data used to create many projecttypes.
     */
    data: projecttypeCreateManyInput | projecttypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * projecttype update
   */
  export type projecttypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projecttype
     */
    select?: projecttypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projecttype
     */
    omit?: projecttypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projecttypeInclude<ExtArgs> | null
    /**
     * The data needed to update a projecttype.
     */
    data: XOR<projecttypeUpdateInput, projecttypeUncheckedUpdateInput>
    /**
     * Choose, which projecttype to update.
     */
    where: projecttypeWhereUniqueInput
  }

  /**
   * projecttype updateMany
   */
  export type projecttypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projecttypes.
     */
    data: XOR<projecttypeUpdateManyMutationInput, projecttypeUncheckedUpdateManyInput>
    /**
     * Filter which projecttypes to update
     */
    where?: projecttypeWhereInput
    /**
     * Limit how many projecttypes to update.
     */
    limit?: number
  }

  /**
   * projecttype updateManyAndReturn
   */
  export type projecttypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projecttype
     */
    select?: projecttypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the projecttype
     */
    omit?: projecttypeOmit<ExtArgs> | null
    /**
     * The data used to update projecttypes.
     */
    data: XOR<projecttypeUpdateManyMutationInput, projecttypeUncheckedUpdateManyInput>
    /**
     * Filter which projecttypes to update
     */
    where?: projecttypeWhereInput
    /**
     * Limit how many projecttypes to update.
     */
    limit?: number
  }

  /**
   * projecttype upsert
   */
  export type projecttypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projecttype
     */
    select?: projecttypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projecttype
     */
    omit?: projecttypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projecttypeInclude<ExtArgs> | null
    /**
     * The filter to search for the projecttype to update in case it exists.
     */
    where: projecttypeWhereUniqueInput
    /**
     * In case the projecttype found by the `where` argument doesn't exist, create a new projecttype with this data.
     */
    create: XOR<projecttypeCreateInput, projecttypeUncheckedCreateInput>
    /**
     * In case the projecttype was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projecttypeUpdateInput, projecttypeUncheckedUpdateInput>
  }

  /**
   * projecttype delete
   */
  export type projecttypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projecttype
     */
    select?: projecttypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projecttype
     */
    omit?: projecttypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projecttypeInclude<ExtArgs> | null
    /**
     * Filter which projecttype to delete.
     */
    where: projecttypeWhereUniqueInput
  }

  /**
   * projecttype deleteMany
   */
  export type projecttypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projecttypes to delete
     */
    where?: projecttypeWhereInput
    /**
     * Limit how many projecttypes to delete.
     */
    limit?: number
  }

  /**
   * projecttype.projectgroup
   */
  export type projecttype$projectgroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectgroup
     */
    select?: projectgroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectgroup
     */
    omit?: projectgroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectgroupInclude<ExtArgs> | null
    where?: projectgroupWhereInput
    orderBy?: projectgroupOrderByWithRelationInput | projectgroupOrderByWithRelationInput[]
    cursor?: projectgroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectgroupScalarFieldEnum | ProjectgroupScalarFieldEnum[]
  }

  /**
   * projecttype without action
   */
  export type projecttypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projecttype
     */
    select?: projecttypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projecttype
     */
    omit?: projecttypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projecttypeInclude<ExtArgs> | null
  }


  /**
   * Model staff
   */

  export type AggregateStaff = {
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  export type StaffAvgAggregateOutputType = {
    staffid: number | null
    registeredby: number | null
  }

  export type StaffSumAggregateOutputType = {
    staffid: number | null
    registeredby: number | null
  }

  export type StaffMinAggregateOutputType = {
    staffid: number | null
    staffname: string | null
    phone: string | null
    email: string | null
    password: string | null
    role: string | null
    description: string | null
    created: Date | null
    modified: Date | null
    registeredby: number | null
    profileimage: string | null
  }

  export type StaffMaxAggregateOutputType = {
    staffid: number | null
    staffname: string | null
    phone: string | null
    email: string | null
    password: string | null
    role: string | null
    description: string | null
    created: Date | null
    modified: Date | null
    registeredby: number | null
    profileimage: string | null
  }

  export type StaffCountAggregateOutputType = {
    staffid: number
    staffname: number
    phone: number
    email: number
    password: number
    role: number
    description: number
    created: number
    modified: number
    registeredby: number
    profileimage: number
    _all: number
  }


  export type StaffAvgAggregateInputType = {
    staffid?: true
    registeredby?: true
  }

  export type StaffSumAggregateInputType = {
    staffid?: true
    registeredby?: true
  }

  export type StaffMinAggregateInputType = {
    staffid?: true
    staffname?: true
    phone?: true
    email?: true
    password?: true
    role?: true
    description?: true
    created?: true
    modified?: true
    registeredby?: true
    profileimage?: true
  }

  export type StaffMaxAggregateInputType = {
    staffid?: true
    staffname?: true
    phone?: true
    email?: true
    password?: true
    role?: true
    description?: true
    created?: true
    modified?: true
    registeredby?: true
    profileimage?: true
  }

  export type StaffCountAggregateInputType = {
    staffid?: true
    staffname?: true
    phone?: true
    email?: true
    password?: true
    role?: true
    description?: true
    created?: true
    modified?: true
    registeredby?: true
    profileimage?: true
    _all?: true
  }

  export type StaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which staff to aggregate.
     */
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     */
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned staff
    **/
    _count?: true | StaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StaffAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StaffSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffMaxAggregateInputType
  }

  export type GetStaffAggregateType<T extends StaffAggregateArgs> = {
        [P in keyof T & keyof AggregateStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff[P]>
      : GetScalarType<T[P], AggregateStaff[P]>
  }




  export type staffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: staffWhereInput
    orderBy?: staffOrderByWithAggregationInput | staffOrderByWithAggregationInput[]
    by: StaffScalarFieldEnum[] | StaffScalarFieldEnum
    having?: staffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffCountAggregateInputType | true
    _avg?: StaffAvgAggregateInputType
    _sum?: StaffSumAggregateInputType
    _min?: StaffMinAggregateInputType
    _max?: StaffMaxAggregateInputType
  }

  export type StaffGroupByOutputType = {
    staffid: number
    staffname: string
    phone: string | null
    email: string
    password: string
    role: string | null
    description: string | null
    created: Date | null
    modified: Date | null
    registeredby: number | null
    profileimage: string | null
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  type GetStaffGroupByPayload<T extends staffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffGroupByOutputType[P]>
            : GetScalarType<T[P], StaffGroupByOutputType[P]>
        }
      >
    >


  export type staffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    staffid?: boolean
    staffname?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    description?: boolean
    created?: boolean
    modified?: boolean
    registeredby?: boolean
    profileimage?: boolean
    projectgroup_projectgroup_convenerstaffidTostaff?: boolean | staff$projectgroup_projectgroup_convenerstaffidTostaffArgs<ExtArgs>
    projectgroup_projectgroup_expertstaffidTostaff?: boolean | staff$projectgroup_projectgroup_expertstaffidTostaffArgs<ExtArgs>
    projectmeeting?: boolean | staff$projectmeetingArgs<ExtArgs>
    staff?: boolean | staff$staffArgs<ExtArgs>
    other_staff?: boolean | staff$other_staffArgs<ExtArgs>
    student?: boolean | staff$studentArgs<ExtArgs>
    grouprequest?: boolean | staff$grouprequestArgs<ExtArgs>
    grade?: boolean | staff$gradeArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type staffSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    staffid?: boolean
    staffname?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    description?: boolean
    created?: boolean
    modified?: boolean
    registeredby?: boolean
    profileimage?: boolean
    staff?: boolean | staff$staffArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type staffSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    staffid?: boolean
    staffname?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    description?: boolean
    created?: boolean
    modified?: boolean
    registeredby?: boolean
    profileimage?: boolean
    staff?: boolean | staff$staffArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type staffSelectScalar = {
    staffid?: boolean
    staffname?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    description?: boolean
    created?: boolean
    modified?: boolean
    registeredby?: boolean
    profileimage?: boolean
  }

  export type staffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"staffid" | "staffname" | "phone" | "email" | "password" | "role" | "description" | "created" | "modified" | "registeredby" | "profileimage", ExtArgs["result"]["staff"]>
  export type staffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectgroup_projectgroup_convenerstaffidTostaff?: boolean | staff$projectgroup_projectgroup_convenerstaffidTostaffArgs<ExtArgs>
    projectgroup_projectgroup_expertstaffidTostaff?: boolean | staff$projectgroup_projectgroup_expertstaffidTostaffArgs<ExtArgs>
    projectmeeting?: boolean | staff$projectmeetingArgs<ExtArgs>
    staff?: boolean | staff$staffArgs<ExtArgs>
    other_staff?: boolean | staff$other_staffArgs<ExtArgs>
    student?: boolean | staff$studentArgs<ExtArgs>
    grouprequest?: boolean | staff$grouprequestArgs<ExtArgs>
    grade?: boolean | staff$gradeArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type staffIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | staff$staffArgs<ExtArgs>
  }
  export type staffIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | staff$staffArgs<ExtArgs>
  }

  export type $staffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "staff"
    objects: {
      projectgroup_projectgroup_convenerstaffidTostaff: Prisma.$projectgroupPayload<ExtArgs>[]
      projectgroup_projectgroup_expertstaffidTostaff: Prisma.$projectgroupPayload<ExtArgs>[]
      projectmeeting: Prisma.$projectmeetingPayload<ExtArgs>[]
      staff: Prisma.$staffPayload<ExtArgs> | null
      other_staff: Prisma.$staffPayload<ExtArgs>[]
      student: Prisma.$studentPayload<ExtArgs>[]
      grouprequest: Prisma.$grouprequestPayload<ExtArgs>[]
      grade: Prisma.$gradePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      staffid: number
      staffname: string
      phone: string | null
      email: string
      password: string
      role: string | null
      description: string | null
      created: Date | null
      modified: Date | null
      registeredby: number | null
      profileimage: string | null
    }, ExtArgs["result"]["staff"]>
    composites: {}
  }

  type staffGetPayload<S extends boolean | null | undefined | staffDefaultArgs> = $Result.GetResult<Prisma.$staffPayload, S>

  type staffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<staffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffCountAggregateInputType | true
    }

  export interface staffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['staff'], meta: { name: 'staff' } }
    /**
     * Find zero or one Staff that matches the filter.
     * @param {staffFindUniqueArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends staffFindUniqueArgs>(args: SelectSubset<T, staffFindUniqueArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Staff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {staffFindUniqueOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends staffFindUniqueOrThrowArgs>(args: SelectSubset<T, staffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffFindFirstArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends staffFindFirstArgs>(args?: SelectSubset<T, staffFindFirstArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffFindFirstOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends staffFindFirstOrThrowArgs>(args?: SelectSubset<T, staffFindFirstOrThrowArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff
     * const staff = await prisma.staff.findMany()
     * 
     * // Get first 10 Staff
     * const staff = await prisma.staff.findMany({ take: 10 })
     * 
     * // Only select the `staffid`
     * const staffWithStaffidOnly = await prisma.staff.findMany({ select: { staffid: true } })
     * 
     */
    findMany<T extends staffFindManyArgs>(args?: SelectSubset<T, staffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Staff.
     * @param {staffCreateArgs} args - Arguments to create a Staff.
     * @example
     * // Create one Staff
     * const Staff = await prisma.staff.create({
     *   data: {
     *     // ... data to create a Staff
     *   }
     * })
     * 
     */
    create<T extends staffCreateArgs>(args: SelectSubset<T, staffCreateArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Staff.
     * @param {staffCreateManyArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends staffCreateManyArgs>(args?: SelectSubset<T, staffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Staff and returns the data saved in the database.
     * @param {staffCreateManyAndReturnArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Staff and only return the `staffid`
     * const staffWithStaffidOnly = await prisma.staff.createManyAndReturn({
     *   select: { staffid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends staffCreateManyAndReturnArgs>(args?: SelectSubset<T, staffCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Staff.
     * @param {staffDeleteArgs} args - Arguments to delete one Staff.
     * @example
     * // Delete one Staff
     * const Staff = await prisma.staff.delete({
     *   where: {
     *     // ... filter to delete one Staff
     *   }
     * })
     * 
     */
    delete<T extends staffDeleteArgs>(args: SelectSubset<T, staffDeleteArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Staff.
     * @param {staffUpdateArgs} args - Arguments to update one Staff.
     * @example
     * // Update one Staff
     * const staff = await prisma.staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends staffUpdateArgs>(args: SelectSubset<T, staffUpdateArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Staff.
     * @param {staffDeleteManyArgs} args - Arguments to filter Staff to delete.
     * @example
     * // Delete a few Staff
     * const { count } = await prisma.staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends staffDeleteManyArgs>(args?: SelectSubset<T, staffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends staffUpdateManyArgs>(args: SelectSubset<T, staffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff and returns the data updated in the database.
     * @param {staffUpdateManyAndReturnArgs} args - Arguments to update many Staff.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Staff and only return the `staffid`
     * const staffWithStaffidOnly = await prisma.staff.updateManyAndReturn({
     *   select: { staffid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends staffUpdateManyAndReturnArgs>(args: SelectSubset<T, staffUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Staff.
     * @param {staffUpsertArgs} args - Arguments to update or create a Staff.
     * @example
     * // Update or create a Staff
     * const staff = await prisma.staff.upsert({
     *   create: {
     *     // ... data to create a Staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff we want to update
     *   }
     * })
     */
    upsert<T extends staffUpsertArgs>(args: SelectSubset<T, staffUpsertArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffCountArgs} args - Arguments to filter Staff to count.
     * @example
     * // Count the number of Staff
     * const count = await prisma.staff.count({
     *   where: {
     *     // ... the filter for the Staff we want to count
     *   }
     * })
    **/
    count<T extends staffCountArgs>(
      args?: Subset<T, staffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StaffAggregateArgs>(args: Subset<T, StaffAggregateArgs>): Prisma.PrismaPromise<GetStaffAggregateType<T>>

    /**
     * Group by Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends staffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: staffGroupByArgs['orderBy'] }
        : { orderBy?: staffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, staffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the staff model
   */
  readonly fields: staffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__staffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectgroup_projectgroup_convenerstaffidTostaff<T extends staff$projectgroup_projectgroup_convenerstaffidTostaffArgs<ExtArgs> = {}>(args?: Subset<T, staff$projectgroup_projectgroup_convenerstaffidTostaffArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectgroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectgroup_projectgroup_expertstaffidTostaff<T extends staff$projectgroup_projectgroup_expertstaffidTostaffArgs<ExtArgs> = {}>(args?: Subset<T, staff$projectgroup_projectgroup_expertstaffidTostaffArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectgroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectmeeting<T extends staff$projectmeetingArgs<ExtArgs> = {}>(args?: Subset<T, staff$projectmeetingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectmeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    staff<T extends staff$staffArgs<ExtArgs> = {}>(args?: Subset<T, staff$staffArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    other_staff<T extends staff$other_staffArgs<ExtArgs> = {}>(args?: Subset<T, staff$other_staffArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    student<T extends staff$studentArgs<ExtArgs> = {}>(args?: Subset<T, staff$studentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    grouprequest<T extends staff$grouprequestArgs<ExtArgs> = {}>(args?: Subset<T, staff$grouprequestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$grouprequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    grade<T extends staff$gradeArgs<ExtArgs> = {}>(args?: Subset<T, staff$gradeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the staff model
   */
  interface staffFieldRefs {
    readonly staffid: FieldRef<"staff", 'Int'>
    readonly staffname: FieldRef<"staff", 'String'>
    readonly phone: FieldRef<"staff", 'String'>
    readonly email: FieldRef<"staff", 'String'>
    readonly password: FieldRef<"staff", 'String'>
    readonly role: FieldRef<"staff", 'String'>
    readonly description: FieldRef<"staff", 'String'>
    readonly created: FieldRef<"staff", 'DateTime'>
    readonly modified: FieldRef<"staff", 'DateTime'>
    readonly registeredby: FieldRef<"staff", 'Int'>
    readonly profileimage: FieldRef<"staff", 'String'>
  }
    

  // Custom InputTypes
  /**
   * staff findUnique
   */
  export type staffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where: staffWhereUniqueInput
  }

  /**
   * staff findUniqueOrThrow
   */
  export type staffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where: staffWhereUniqueInput
  }

  /**
   * staff findFirst
   */
  export type staffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     */
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for staff.
     */
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * staff findFirstOrThrow
   */
  export type staffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     */
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for staff.
     */
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * staff findMany
   */
  export type staffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     */
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing staff.
     */
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * staff create
   */
  export type staffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * The data needed to create a staff.
     */
    data: XOR<staffCreateInput, staffUncheckedCreateInput>
  }

  /**
   * staff createMany
   */
  export type staffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many staff.
     */
    data: staffCreateManyInput | staffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * staff createManyAndReturn
   */
  export type staffCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * The data used to create many staff.
     */
    data: staffCreateManyInput | staffCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * staff update
   */
  export type staffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * The data needed to update a staff.
     */
    data: XOR<staffUpdateInput, staffUncheckedUpdateInput>
    /**
     * Choose, which staff to update.
     */
    where: staffWhereUniqueInput
  }

  /**
   * staff updateMany
   */
  export type staffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update staff.
     */
    data: XOR<staffUpdateManyMutationInput, staffUncheckedUpdateManyInput>
    /**
     * Filter which staff to update
     */
    where?: staffWhereInput
    /**
     * Limit how many staff to update.
     */
    limit?: number
  }

  /**
   * staff updateManyAndReturn
   */
  export type staffUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * The data used to update staff.
     */
    data: XOR<staffUpdateManyMutationInput, staffUncheckedUpdateManyInput>
    /**
     * Filter which staff to update
     */
    where?: staffWhereInput
    /**
     * Limit how many staff to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * staff upsert
   */
  export type staffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * The filter to search for the staff to update in case it exists.
     */
    where: staffWhereUniqueInput
    /**
     * In case the staff found by the `where` argument doesn't exist, create a new staff with this data.
     */
    create: XOR<staffCreateInput, staffUncheckedCreateInput>
    /**
     * In case the staff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<staffUpdateInput, staffUncheckedUpdateInput>
  }

  /**
   * staff delete
   */
  export type staffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter which staff to delete.
     */
    where: staffWhereUniqueInput
  }

  /**
   * staff deleteMany
   */
  export type staffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which staff to delete
     */
    where?: staffWhereInput
    /**
     * Limit how many staff to delete.
     */
    limit?: number
  }

  /**
   * staff.projectgroup_projectgroup_convenerstaffidTostaff
   */
  export type staff$projectgroup_projectgroup_convenerstaffidTostaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectgroup
     */
    select?: projectgroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectgroup
     */
    omit?: projectgroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectgroupInclude<ExtArgs> | null
    where?: projectgroupWhereInput
    orderBy?: projectgroupOrderByWithRelationInput | projectgroupOrderByWithRelationInput[]
    cursor?: projectgroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectgroupScalarFieldEnum | ProjectgroupScalarFieldEnum[]
  }

  /**
   * staff.projectgroup_projectgroup_expertstaffidTostaff
   */
  export type staff$projectgroup_projectgroup_expertstaffidTostaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectgroup
     */
    select?: projectgroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectgroup
     */
    omit?: projectgroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectgroupInclude<ExtArgs> | null
    where?: projectgroupWhereInput
    orderBy?: projectgroupOrderByWithRelationInput | projectgroupOrderByWithRelationInput[]
    cursor?: projectgroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectgroupScalarFieldEnum | ProjectgroupScalarFieldEnum[]
  }

  /**
   * staff.projectmeeting
   */
  export type staff$projectmeetingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmeeting
     */
    select?: projectmeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectmeeting
     */
    omit?: projectmeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmeetingInclude<ExtArgs> | null
    where?: projectmeetingWhereInput
    orderBy?: projectmeetingOrderByWithRelationInput | projectmeetingOrderByWithRelationInput[]
    cursor?: projectmeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectmeetingScalarFieldEnum | ProjectmeetingScalarFieldEnum[]
  }

  /**
   * staff.staff
   */
  export type staff$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    where?: staffWhereInput
  }

  /**
   * staff.other_staff
   */
  export type staff$other_staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    where?: staffWhereInput
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[]
    cursor?: staffWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * staff.student
   */
  export type staff$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    where?: studentWhereInput
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    cursor?: studentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * staff.grouprequest
   */
  export type staff$grouprequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grouprequest
     */
    select?: grouprequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grouprequest
     */
    omit?: grouprequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grouprequestInclude<ExtArgs> | null
    where?: grouprequestWhereInput
    orderBy?: grouprequestOrderByWithRelationInput | grouprequestOrderByWithRelationInput[]
    cursor?: grouprequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GrouprequestScalarFieldEnum | GrouprequestScalarFieldEnum[]
  }

  /**
   * staff.grade
   */
  export type staff$gradeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grade
     */
    omit?: gradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gradeInclude<ExtArgs> | null
    where?: gradeWhereInput
    orderBy?: gradeOrderByWithRelationInput | gradeOrderByWithRelationInput[]
    cursor?: gradeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * staff without action
   */
  export type staffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
  }


  /**
   * Model student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    studentid: number | null
    registeredby: number | null
  }

  export type StudentSumAggregateOutputType = {
    studentid: number | null
    registeredby: number | null
  }

  export type StudentMinAggregateOutputType = {
    studentid: number | null
    studentname: string | null
    phone: string | null
    email: string | null
    password: string | null
    description: string | null
    created: Date | null
    modified: Date | null
    registeredby: number | null
    profileimage: string | null
  }

  export type StudentMaxAggregateOutputType = {
    studentid: number | null
    studentname: string | null
    phone: string | null
    email: string | null
    password: string | null
    description: string | null
    created: Date | null
    modified: Date | null
    registeredby: number | null
    profileimage: string | null
  }

  export type StudentCountAggregateOutputType = {
    studentid: number
    studentname: number
    phone: number
    email: number
    password: number
    description: number
    created: number
    modified: number
    registeredby: number
    profileimage: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    studentid?: true
    registeredby?: true
  }

  export type StudentSumAggregateInputType = {
    studentid?: true
    registeredby?: true
  }

  export type StudentMinAggregateInputType = {
    studentid?: true
    studentname?: true
    phone?: true
    email?: true
    password?: true
    description?: true
    created?: true
    modified?: true
    registeredby?: true
    profileimage?: true
  }

  export type StudentMaxAggregateInputType = {
    studentid?: true
    studentname?: true
    phone?: true
    email?: true
    password?: true
    description?: true
    created?: true
    modified?: true
    registeredby?: true
    profileimage?: true
  }

  export type StudentCountAggregateInputType = {
    studentid?: true
    studentname?: true
    phone?: true
    email?: true
    password?: true
    description?: true
    created?: true
    modified?: true
    registeredby?: true
    profileimage?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which student to aggregate.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type studentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentWhereInput
    orderBy?: studentOrderByWithAggregationInput | studentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: studentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    studentid: number
    studentname: string
    phone: string | null
    email: string
    password: string
    description: string | null
    created: Date | null
    modified: Date | null
    registeredby: number | null
    profileimage: string | null
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends studentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type studentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    studentid?: boolean
    studentname?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    description?: boolean
    created?: boolean
    modified?: boolean
    registeredby?: boolean
    profileimage?: boolean
    projectgroupmember?: boolean | student$projectgroupmemberArgs<ExtArgs>
    projectmeetingattendance?: boolean | student$projectmeetingattendanceArgs<ExtArgs>
    staff?: boolean | student$staffArgs<ExtArgs>
    grouprequest?: boolean | student$grouprequestArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type studentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    studentid?: boolean
    studentname?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    description?: boolean
    created?: boolean
    modified?: boolean
    registeredby?: boolean
    profileimage?: boolean
    staff?: boolean | student$staffArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type studentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    studentid?: boolean
    studentname?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    description?: boolean
    created?: boolean
    modified?: boolean
    registeredby?: boolean
    profileimage?: boolean
    staff?: boolean | student$staffArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type studentSelectScalar = {
    studentid?: boolean
    studentname?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    description?: boolean
    created?: boolean
    modified?: boolean
    registeredby?: boolean
    profileimage?: boolean
  }

  export type studentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"studentid" | "studentname" | "phone" | "email" | "password" | "description" | "created" | "modified" | "registeredby" | "profileimage", ExtArgs["result"]["student"]>
  export type studentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectgroupmember?: boolean | student$projectgroupmemberArgs<ExtArgs>
    projectmeetingattendance?: boolean | student$projectmeetingattendanceArgs<ExtArgs>
    staff?: boolean | student$staffArgs<ExtArgs>
    grouprequest?: boolean | student$grouprequestArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type studentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | student$staffArgs<ExtArgs>
  }
  export type studentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | student$staffArgs<ExtArgs>
  }

  export type $studentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "student"
    objects: {
      projectgroupmember: Prisma.$projectgroupmemberPayload<ExtArgs>[]
      projectmeetingattendance: Prisma.$projectmeetingattendancePayload<ExtArgs>[]
      staff: Prisma.$staffPayload<ExtArgs> | null
      grouprequest: Prisma.$grouprequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      studentid: number
      studentname: string
      phone: string | null
      email: string
      password: string
      description: string | null
      created: Date | null
      modified: Date | null
      registeredby: number | null
      profileimage: string | null
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type studentGetPayload<S extends boolean | null | undefined | studentDefaultArgs> = $Result.GetResult<Prisma.$studentPayload, S>

  type studentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<studentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface studentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['student'], meta: { name: 'student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {studentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends studentFindUniqueArgs>(args: SelectSubset<T, studentFindUniqueArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {studentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends studentFindUniqueOrThrowArgs>(args: SelectSubset<T, studentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends studentFindFirstArgs>(args?: SelectSubset<T, studentFindFirstArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends studentFindFirstOrThrowArgs>(args?: SelectSubset<T, studentFindFirstOrThrowArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `studentid`
     * const studentWithStudentidOnly = await prisma.student.findMany({ select: { studentid: true } })
     * 
     */
    findMany<T extends studentFindManyArgs>(args?: SelectSubset<T, studentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {studentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends studentCreateArgs>(args: SelectSubset<T, studentCreateArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {studentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends studentCreateManyArgs>(args?: SelectSubset<T, studentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {studentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `studentid`
     * const studentWithStudentidOnly = await prisma.student.createManyAndReturn({
     *   select: { studentid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends studentCreateManyAndReturnArgs>(args?: SelectSubset<T, studentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {studentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends studentDeleteArgs>(args: SelectSubset<T, studentDeleteArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {studentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends studentUpdateArgs>(args: SelectSubset<T, studentUpdateArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {studentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends studentDeleteManyArgs>(args?: SelectSubset<T, studentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends studentUpdateManyArgs>(args: SelectSubset<T, studentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {studentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `studentid`
     * const studentWithStudentidOnly = await prisma.student.updateManyAndReturn({
     *   select: { studentid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends studentUpdateManyAndReturnArgs>(args: SelectSubset<T, studentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {studentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends studentUpsertArgs>(args: SelectSubset<T, studentUpsertArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends studentCountArgs>(
      args?: Subset<T, studentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends studentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: studentGroupByArgs['orderBy'] }
        : { orderBy?: studentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, studentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the student model
   */
  readonly fields: studentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__studentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectgroupmember<T extends student$projectgroupmemberArgs<ExtArgs> = {}>(args?: Subset<T, student$projectgroupmemberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectgroupmemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectmeetingattendance<T extends student$projectmeetingattendanceArgs<ExtArgs> = {}>(args?: Subset<T, student$projectmeetingattendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectmeetingattendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    staff<T extends student$staffArgs<ExtArgs> = {}>(args?: Subset<T, student$staffArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    grouprequest<T extends student$grouprequestArgs<ExtArgs> = {}>(args?: Subset<T, student$grouprequestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$grouprequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the student model
   */
  interface studentFieldRefs {
    readonly studentid: FieldRef<"student", 'Int'>
    readonly studentname: FieldRef<"student", 'String'>
    readonly phone: FieldRef<"student", 'String'>
    readonly email: FieldRef<"student", 'String'>
    readonly password: FieldRef<"student", 'String'>
    readonly description: FieldRef<"student", 'String'>
    readonly created: FieldRef<"student", 'DateTime'>
    readonly modified: FieldRef<"student", 'DateTime'>
    readonly registeredby: FieldRef<"student", 'Int'>
    readonly profileimage: FieldRef<"student", 'String'>
  }
    

  // Custom InputTypes
  /**
   * student findUnique
   */
  export type studentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student findUniqueOrThrow
   */
  export type studentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student findFirst
   */
  export type studentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * student findFirstOrThrow
   */
  export type studentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * student findMany
   */
  export type studentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * student create
   */
  export type studentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * The data needed to create a student.
     */
    data: XOR<studentCreateInput, studentUncheckedCreateInput>
  }

  /**
   * student createMany
   */
  export type studentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many students.
     */
    data: studentCreateManyInput | studentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * student createManyAndReturn
   */
  export type studentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * The data used to create many students.
     */
    data: studentCreateManyInput | studentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * student update
   */
  export type studentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * The data needed to update a student.
     */
    data: XOR<studentUpdateInput, studentUncheckedUpdateInput>
    /**
     * Choose, which student to update.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student updateMany
   */
  export type studentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update students.
     */
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyInput>
    /**
     * Filter which students to update
     */
    where?: studentWhereInput
    /**
     * Limit how many students to update.
     */
    limit?: number
  }

  /**
   * student updateManyAndReturn
   */
  export type studentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * The data used to update students.
     */
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyInput>
    /**
     * Filter which students to update
     */
    where?: studentWhereInput
    /**
     * Limit how many students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * student upsert
   */
  export type studentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * The filter to search for the student to update in case it exists.
     */
    where: studentWhereUniqueInput
    /**
     * In case the student found by the `where` argument doesn't exist, create a new student with this data.
     */
    create: XOR<studentCreateInput, studentUncheckedCreateInput>
    /**
     * In case the student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<studentUpdateInput, studentUncheckedUpdateInput>
  }

  /**
   * student delete
   */
  export type studentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter which student to delete.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student deleteMany
   */
  export type studentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which students to delete
     */
    where?: studentWhereInput
    /**
     * Limit how many students to delete.
     */
    limit?: number
  }

  /**
   * student.projectgroupmember
   */
  export type student$projectgroupmemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectgroupmember
     */
    select?: projectgroupmemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectgroupmember
     */
    omit?: projectgroupmemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectgroupmemberInclude<ExtArgs> | null
    where?: projectgroupmemberWhereInput
    orderBy?: projectgroupmemberOrderByWithRelationInput | projectgroupmemberOrderByWithRelationInput[]
    cursor?: projectgroupmemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectgroupmemberScalarFieldEnum | ProjectgroupmemberScalarFieldEnum[]
  }

  /**
   * student.projectmeetingattendance
   */
  export type student$projectmeetingattendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the projectmeetingattendance
     */
    select?: projectmeetingattendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the projectmeetingattendance
     */
    omit?: projectmeetingattendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: projectmeetingattendanceInclude<ExtArgs> | null
    where?: projectmeetingattendanceWhereInput
    orderBy?: projectmeetingattendanceOrderByWithRelationInput | projectmeetingattendanceOrderByWithRelationInput[]
    cursor?: projectmeetingattendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectmeetingattendanceScalarFieldEnum | ProjectmeetingattendanceScalarFieldEnum[]
  }

  /**
   * student.staff
   */
  export type student$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    where?: staffWhereInput
  }

  /**
   * student.grouprequest
   */
  export type student$grouprequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grouprequest
     */
    select?: grouprequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grouprequest
     */
    omit?: grouprequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: grouprequestInclude<ExtArgs> | null
    where?: grouprequestWhereInput
    orderBy?: grouprequestOrderByWithRelationInput | grouprequestOrderByWithRelationInput[]
    cursor?: grouprequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GrouprequestScalarFieldEnum | GrouprequestScalarFieldEnum[]
  }

  /**
   * student without action
   */
  export type studentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
  }


  /**
   * Model activitylog
   */

  export type AggregateActivitylog = {
    _count: ActivitylogCountAggregateOutputType | null
    _avg: ActivitylogAvgAggregateOutputType | null
    _sum: ActivitylogSumAggregateOutputType | null
    _min: ActivitylogMinAggregateOutputType | null
    _max: ActivitylogMaxAggregateOutputType | null
  }

  export type ActivitylogAvgAggregateOutputType = {
    activityid: number | null
    userid: number | null
  }

  export type ActivitylogSumAggregateOutputType = {
    activityid: number | null
    userid: number | null
  }

  export type ActivitylogMinAggregateOutputType = {
    activityid: number | null
    type: string | null
    detail: string | null
    userid: number | null
    userrole: string | null
    created: Date | null
  }

  export type ActivitylogMaxAggregateOutputType = {
    activityid: number | null
    type: string | null
    detail: string | null
    userid: number | null
    userrole: string | null
    created: Date | null
  }

  export type ActivitylogCountAggregateOutputType = {
    activityid: number
    type: number
    detail: number
    userid: number
    userrole: number
    created: number
    _all: number
  }


  export type ActivitylogAvgAggregateInputType = {
    activityid?: true
    userid?: true
  }

  export type ActivitylogSumAggregateInputType = {
    activityid?: true
    userid?: true
  }

  export type ActivitylogMinAggregateInputType = {
    activityid?: true
    type?: true
    detail?: true
    userid?: true
    userrole?: true
    created?: true
  }

  export type ActivitylogMaxAggregateInputType = {
    activityid?: true
    type?: true
    detail?: true
    userid?: true
    userrole?: true
    created?: true
  }

  export type ActivitylogCountAggregateInputType = {
    activityid?: true
    type?: true
    detail?: true
    userid?: true
    userrole?: true
    created?: true
    _all?: true
  }

  export type ActivitylogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which activitylog to aggregate.
     */
    where?: activitylogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activitylogs to fetch.
     */
    orderBy?: activitylogOrderByWithRelationInput | activitylogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: activitylogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activitylogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activitylogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned activitylogs
    **/
    _count?: true | ActivitylogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivitylogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivitylogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivitylogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivitylogMaxAggregateInputType
  }

  export type GetActivitylogAggregateType<T extends ActivitylogAggregateArgs> = {
        [P in keyof T & keyof AggregateActivitylog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivitylog[P]>
      : GetScalarType<T[P], AggregateActivitylog[P]>
  }




  export type activitylogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: activitylogWhereInput
    orderBy?: activitylogOrderByWithAggregationInput | activitylogOrderByWithAggregationInput[]
    by: ActivitylogScalarFieldEnum[] | ActivitylogScalarFieldEnum
    having?: activitylogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivitylogCountAggregateInputType | true
    _avg?: ActivitylogAvgAggregateInputType
    _sum?: ActivitylogSumAggregateInputType
    _min?: ActivitylogMinAggregateInputType
    _max?: ActivitylogMaxAggregateInputType
  }

  export type ActivitylogGroupByOutputType = {
    activityid: number
    type: string
    detail: string
    userid: number | null
    userrole: string | null
    created: Date
    _count: ActivitylogCountAggregateOutputType | null
    _avg: ActivitylogAvgAggregateOutputType | null
    _sum: ActivitylogSumAggregateOutputType | null
    _min: ActivitylogMinAggregateOutputType | null
    _max: ActivitylogMaxAggregateOutputType | null
  }

  type GetActivitylogGroupByPayload<T extends activitylogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivitylogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivitylogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivitylogGroupByOutputType[P]>
            : GetScalarType<T[P], ActivitylogGroupByOutputType[P]>
        }
      >
    >


  export type activitylogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    activityid?: boolean
    type?: boolean
    detail?: boolean
    userid?: boolean
    userrole?: boolean
    created?: boolean
  }, ExtArgs["result"]["activitylog"]>

  export type activitylogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    activityid?: boolean
    type?: boolean
    detail?: boolean
    userid?: boolean
    userrole?: boolean
    created?: boolean
  }, ExtArgs["result"]["activitylog"]>

  export type activitylogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    activityid?: boolean
    type?: boolean
    detail?: boolean
    userid?: boolean
    userrole?: boolean
    created?: boolean
  }, ExtArgs["result"]["activitylog"]>

  export type activitylogSelectScalar = {
    activityid?: boolean
    type?: boolean
    detail?: boolean
    userid?: boolean
    userrole?: boolean
    created?: boolean
  }

  export type activitylogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"activityid" | "type" | "detail" | "userid" | "userrole" | "created", ExtArgs["result"]["activitylog"]>

  export type $activitylogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "activitylog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      activityid: number
      type: string
      detail: string
      userid: number | null
      userrole: string | null
      created: Date
    }, ExtArgs["result"]["activitylog"]>
    composites: {}
  }

  type activitylogGetPayload<S extends boolean | null | undefined | activitylogDefaultArgs> = $Result.GetResult<Prisma.$activitylogPayload, S>

  type activitylogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<activitylogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivitylogCountAggregateInputType | true
    }

  export interface activitylogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['activitylog'], meta: { name: 'activitylog' } }
    /**
     * Find zero or one Activitylog that matches the filter.
     * @param {activitylogFindUniqueArgs} args - Arguments to find a Activitylog
     * @example
     * // Get one Activitylog
     * const activitylog = await prisma.activitylog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends activitylogFindUniqueArgs>(args: SelectSubset<T, activitylogFindUniqueArgs<ExtArgs>>): Prisma__activitylogClient<$Result.GetResult<Prisma.$activitylogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activitylog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {activitylogFindUniqueOrThrowArgs} args - Arguments to find a Activitylog
     * @example
     * // Get one Activitylog
     * const activitylog = await prisma.activitylog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends activitylogFindUniqueOrThrowArgs>(args: SelectSubset<T, activitylogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__activitylogClient<$Result.GetResult<Prisma.$activitylogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activitylog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activitylogFindFirstArgs} args - Arguments to find a Activitylog
     * @example
     * // Get one Activitylog
     * const activitylog = await prisma.activitylog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends activitylogFindFirstArgs>(args?: SelectSubset<T, activitylogFindFirstArgs<ExtArgs>>): Prisma__activitylogClient<$Result.GetResult<Prisma.$activitylogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activitylog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activitylogFindFirstOrThrowArgs} args - Arguments to find a Activitylog
     * @example
     * // Get one Activitylog
     * const activitylog = await prisma.activitylog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends activitylogFindFirstOrThrowArgs>(args?: SelectSubset<T, activitylogFindFirstOrThrowArgs<ExtArgs>>): Prisma__activitylogClient<$Result.GetResult<Prisma.$activitylogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activitylogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activitylogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activitylogs
     * const activitylogs = await prisma.activitylog.findMany()
     * 
     * // Get first 10 Activitylogs
     * const activitylogs = await prisma.activitylog.findMany({ take: 10 })
     * 
     * // Only select the `activityid`
     * const activitylogWithActivityidOnly = await prisma.activitylog.findMany({ select: { activityid: true } })
     * 
     */
    findMany<T extends activitylogFindManyArgs>(args?: SelectSubset<T, activitylogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activitylogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activitylog.
     * @param {activitylogCreateArgs} args - Arguments to create a Activitylog.
     * @example
     * // Create one Activitylog
     * const Activitylog = await prisma.activitylog.create({
     *   data: {
     *     // ... data to create a Activitylog
     *   }
     * })
     * 
     */
    create<T extends activitylogCreateArgs>(args: SelectSubset<T, activitylogCreateArgs<ExtArgs>>): Prisma__activitylogClient<$Result.GetResult<Prisma.$activitylogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activitylogs.
     * @param {activitylogCreateManyArgs} args - Arguments to create many Activitylogs.
     * @example
     * // Create many Activitylogs
     * const activitylog = await prisma.activitylog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends activitylogCreateManyArgs>(args?: SelectSubset<T, activitylogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Activitylogs and returns the data saved in the database.
     * @param {activitylogCreateManyAndReturnArgs} args - Arguments to create many Activitylogs.
     * @example
     * // Create many Activitylogs
     * const activitylog = await prisma.activitylog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Activitylogs and only return the `activityid`
     * const activitylogWithActivityidOnly = await prisma.activitylog.createManyAndReturn({
     *   select: { activityid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends activitylogCreateManyAndReturnArgs>(args?: SelectSubset<T, activitylogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activitylogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Activitylog.
     * @param {activitylogDeleteArgs} args - Arguments to delete one Activitylog.
     * @example
     * // Delete one Activitylog
     * const Activitylog = await prisma.activitylog.delete({
     *   where: {
     *     // ... filter to delete one Activitylog
     *   }
     * })
     * 
     */
    delete<T extends activitylogDeleteArgs>(args: SelectSubset<T, activitylogDeleteArgs<ExtArgs>>): Prisma__activitylogClient<$Result.GetResult<Prisma.$activitylogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activitylog.
     * @param {activitylogUpdateArgs} args - Arguments to update one Activitylog.
     * @example
     * // Update one Activitylog
     * const activitylog = await prisma.activitylog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends activitylogUpdateArgs>(args: SelectSubset<T, activitylogUpdateArgs<ExtArgs>>): Prisma__activitylogClient<$Result.GetResult<Prisma.$activitylogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activitylogs.
     * @param {activitylogDeleteManyArgs} args - Arguments to filter Activitylogs to delete.
     * @example
     * // Delete a few Activitylogs
     * const { count } = await prisma.activitylog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends activitylogDeleteManyArgs>(args?: SelectSubset<T, activitylogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activitylogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activitylogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activitylogs
     * const activitylog = await prisma.activitylog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends activitylogUpdateManyArgs>(args: SelectSubset<T, activitylogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activitylogs and returns the data updated in the database.
     * @param {activitylogUpdateManyAndReturnArgs} args - Arguments to update many Activitylogs.
     * @example
     * // Update many Activitylogs
     * const activitylog = await prisma.activitylog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Activitylogs and only return the `activityid`
     * const activitylogWithActivityidOnly = await prisma.activitylog.updateManyAndReturn({
     *   select: { activityid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends activitylogUpdateManyAndReturnArgs>(args: SelectSubset<T, activitylogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activitylogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Activitylog.
     * @param {activitylogUpsertArgs} args - Arguments to update or create a Activitylog.
     * @example
     * // Update or create a Activitylog
     * const activitylog = await prisma.activitylog.upsert({
     *   create: {
     *     // ... data to create a Activitylog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activitylog we want to update
     *   }
     * })
     */
    upsert<T extends activitylogUpsertArgs>(args: SelectSubset<T, activitylogUpsertArgs<ExtArgs>>): Prisma__activitylogClient<$Result.GetResult<Prisma.$activitylogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Activitylogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activitylogCountArgs} args - Arguments to filter Activitylogs to count.
     * @example
     * // Count the number of Activitylogs
     * const count = await prisma.activitylog.count({
     *   where: {
     *     // ... the filter for the Activitylogs we want to count
     *   }
     * })
    **/
    count<T extends activitylogCountArgs>(
      args?: Subset<T, activitylogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivitylogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activitylog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivitylogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivitylogAggregateArgs>(args: Subset<T, ActivitylogAggregateArgs>): Prisma.PrismaPromise<GetActivitylogAggregateType<T>>

    /**
     * Group by Activitylog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activitylogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends activitylogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: activitylogGroupByArgs['orderBy'] }
        : { orderBy?: activitylogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, activitylogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivitylogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the activitylog model
   */
  readonly fields: activitylogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for activitylog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__activitylogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the activitylog model
   */
  interface activitylogFieldRefs {
    readonly activityid: FieldRef<"activitylog", 'Int'>
    readonly type: FieldRef<"activitylog", 'String'>
    readonly detail: FieldRef<"activitylog", 'String'>
    readonly userid: FieldRef<"activitylog", 'Int'>
    readonly userrole: FieldRef<"activitylog", 'String'>
    readonly created: FieldRef<"activitylog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * activitylog findUnique
   */
  export type activitylogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activitylog
     */
    select?: activitylogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activitylog
     */
    omit?: activitylogOmit<ExtArgs> | null
    /**
     * Filter, which activitylog to fetch.
     */
    where: activitylogWhereUniqueInput
  }

  /**
   * activitylog findUniqueOrThrow
   */
  export type activitylogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activitylog
     */
    select?: activitylogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activitylog
     */
    omit?: activitylogOmit<ExtArgs> | null
    /**
     * Filter, which activitylog to fetch.
     */
    where: activitylogWhereUniqueInput
  }

  /**
   * activitylog findFirst
   */
  export type activitylogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activitylog
     */
    select?: activitylogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activitylog
     */
    omit?: activitylogOmit<ExtArgs> | null
    /**
     * Filter, which activitylog to fetch.
     */
    where?: activitylogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activitylogs to fetch.
     */
    orderBy?: activitylogOrderByWithRelationInput | activitylogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for activitylogs.
     */
    cursor?: activitylogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activitylogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activitylogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of activitylogs.
     */
    distinct?: ActivitylogScalarFieldEnum | ActivitylogScalarFieldEnum[]
  }

  /**
   * activitylog findFirstOrThrow
   */
  export type activitylogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activitylog
     */
    select?: activitylogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activitylog
     */
    omit?: activitylogOmit<ExtArgs> | null
    /**
     * Filter, which activitylog to fetch.
     */
    where?: activitylogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activitylogs to fetch.
     */
    orderBy?: activitylogOrderByWithRelationInput | activitylogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for activitylogs.
     */
    cursor?: activitylogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activitylogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activitylogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of activitylogs.
     */
    distinct?: ActivitylogScalarFieldEnum | ActivitylogScalarFieldEnum[]
  }

  /**
   * activitylog findMany
   */
  export type activitylogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activitylog
     */
    select?: activitylogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activitylog
     */
    omit?: activitylogOmit<ExtArgs> | null
    /**
     * Filter, which activitylogs to fetch.
     */
    where?: activitylogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activitylogs to fetch.
     */
    orderBy?: activitylogOrderByWithRelationInput | activitylogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing activitylogs.
     */
    cursor?: activitylogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activitylogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activitylogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of activitylogs.
     */
    distinct?: ActivitylogScalarFieldEnum | ActivitylogScalarFieldEnum[]
  }

  /**
   * activitylog create
   */
  export type activitylogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activitylog
     */
    select?: activitylogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activitylog
     */
    omit?: activitylogOmit<ExtArgs> | null
    /**
     * The data needed to create a activitylog.
     */
    data: XOR<activitylogCreateInput, activitylogUncheckedCreateInput>
  }

  /**
   * activitylog createMany
   */
  export type activitylogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many activitylogs.
     */
    data: activitylogCreateManyInput | activitylogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * activitylog createManyAndReturn
   */
  export type activitylogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activitylog
     */
    select?: activitylogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the activitylog
     */
    omit?: activitylogOmit<ExtArgs> | null
    /**
     * The data used to create many activitylogs.
     */
    data: activitylogCreateManyInput | activitylogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * activitylog update
   */
  export type activitylogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activitylog
     */
    select?: activitylogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activitylog
     */
    omit?: activitylogOmit<ExtArgs> | null
    /**
     * The data needed to update a activitylog.
     */
    data: XOR<activitylogUpdateInput, activitylogUncheckedUpdateInput>
    /**
     * Choose, which activitylog to update.
     */
    where: activitylogWhereUniqueInput
  }

  /**
   * activitylog updateMany
   */
  export type activitylogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update activitylogs.
     */
    data: XOR<activitylogUpdateManyMutationInput, activitylogUncheckedUpdateManyInput>
    /**
     * Filter which activitylogs to update
     */
    where?: activitylogWhereInput
    /**
     * Limit how many activitylogs to update.
     */
    limit?: number
  }

  /**
   * activitylog updateManyAndReturn
   */
  export type activitylogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activitylog
     */
    select?: activitylogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the activitylog
     */
    omit?: activitylogOmit<ExtArgs> | null
    /**
     * The data used to update activitylogs.
     */
    data: XOR<activitylogUpdateManyMutationInput, activitylogUncheckedUpdateManyInput>
    /**
     * Filter which activitylogs to update
     */
    where?: activitylogWhereInput
    /**
     * Limit how many activitylogs to update.
     */
    limit?: number
  }

  /**
   * activitylog upsert
   */
  export type activitylogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activitylog
     */
    select?: activitylogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activitylog
     */
    omit?: activitylogOmit<ExtArgs> | null
    /**
     * The filter to search for the activitylog to update in case it exists.
     */
    where: activitylogWhereUniqueInput
    /**
     * In case the activitylog found by the `where` argument doesn't exist, create a new activitylog with this data.
     */
    create: XOR<activitylogCreateInput, activitylogUncheckedCreateInput>
    /**
     * In case the activitylog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<activitylogUpdateInput, activitylogUncheckedUpdateInput>
  }

  /**
   * activitylog delete
   */
  export type activitylogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activitylog
     */
    select?: activitylogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activitylog
     */
    omit?: activitylogOmit<ExtArgs> | null
    /**
     * Filter which activitylog to delete.
     */
    where: activitylogWhereUniqueInput
  }

  /**
   * activitylog deleteMany
   */
  export type activitylogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which activitylogs to delete
     */
    where?: activitylogWhereInput
    /**
     * Limit how many activitylogs to delete.
     */
    limit?: number
  }

  /**
   * activitylog without action
   */
  export type activitylogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activitylog
     */
    select?: activitylogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the activitylog
     */
    omit?: activitylogOmit<ExtArgs> | null
  }


  /**
   * Model grade
   */

  export type AggregateGrade = {
    _count: GradeCountAggregateOutputType | null
    _avg: GradeAvgAggregateOutputType | null
    _sum: GradeSumAggregateOutputType | null
    _min: GradeMinAggregateOutputType | null
    _max: GradeMaxAggregateOutputType | null
  }

  export type GradeAvgAggregateOutputType = {
    gradeid: number | null
    projectgroupid: number | null
    facultyid: number | null
    marks: number | null
    maxmarks: number | null
  }

  export type GradeSumAggregateOutputType = {
    gradeid: number | null
    projectgroupid: number | null
    facultyid: number | null
    marks: number | null
    maxmarks: number | null
  }

  export type GradeMinAggregateOutputType = {
    gradeid: number | null
    projectgroupid: number | null
    facultyid: number | null
    component: string | null
    marks: number | null
    maxmarks: number | null
    feedback: string | null
    gradedat: Date | null
    created: Date | null
    modified: Date | null
  }

  export type GradeMaxAggregateOutputType = {
    gradeid: number | null
    projectgroupid: number | null
    facultyid: number | null
    component: string | null
    marks: number | null
    maxmarks: number | null
    feedback: string | null
    gradedat: Date | null
    created: Date | null
    modified: Date | null
  }

  export type GradeCountAggregateOutputType = {
    gradeid: number
    projectgroupid: number
    facultyid: number
    component: number
    marks: number
    maxmarks: number
    feedback: number
    gradedat: number
    created: number
    modified: number
    _all: number
  }


  export type GradeAvgAggregateInputType = {
    gradeid?: true
    projectgroupid?: true
    facultyid?: true
    marks?: true
    maxmarks?: true
  }

  export type GradeSumAggregateInputType = {
    gradeid?: true
    projectgroupid?: true
    facultyid?: true
    marks?: true
    maxmarks?: true
  }

  export type GradeMinAggregateInputType = {
    gradeid?: true
    projectgroupid?: true
    facultyid?: true
    component?: true
    marks?: true
    maxmarks?: true
    feedback?: true
    gradedat?: true
    created?: true
    modified?: true
  }

  export type GradeMaxAggregateInputType = {
    gradeid?: true
    projectgroupid?: true
    facultyid?: true
    component?: true
    marks?: true
    maxmarks?: true
    feedback?: true
    gradedat?: true
    created?: true
    modified?: true
  }

  export type GradeCountAggregateInputType = {
    gradeid?: true
    projectgroupid?: true
    facultyid?: true
    component?: true
    marks?: true
    maxmarks?: true
    feedback?: true
    gradedat?: true
    created?: true
    modified?: true
    _all?: true
  }

  export type GradeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which grade to aggregate.
     */
    where?: gradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grades to fetch.
     */
    orderBy?: gradeOrderByWithRelationInput | gradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: gradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned grades
    **/
    _count?: true | GradeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GradeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GradeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GradeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GradeMaxAggregateInputType
  }

  export type GetGradeAggregateType<T extends GradeAggregateArgs> = {
        [P in keyof T & keyof AggregateGrade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrade[P]>
      : GetScalarType<T[P], AggregateGrade[P]>
  }




  export type gradeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gradeWhereInput
    orderBy?: gradeOrderByWithAggregationInput | gradeOrderByWithAggregationInput[]
    by: GradeScalarFieldEnum[] | GradeScalarFieldEnum
    having?: gradeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GradeCountAggregateInputType | true
    _avg?: GradeAvgAggregateInputType
    _sum?: GradeSumAggregateInputType
    _min?: GradeMinAggregateInputType
    _max?: GradeMaxAggregateInputType
  }

  export type GradeGroupByOutputType = {
    gradeid: number
    projectgroupid: number
    facultyid: number
    component: string
    marks: number
    maxmarks: number
    feedback: string | null
    gradedat: Date
    created: Date
    modified: Date
    _count: GradeCountAggregateOutputType | null
    _avg: GradeAvgAggregateOutputType | null
    _sum: GradeSumAggregateOutputType | null
    _min: GradeMinAggregateOutputType | null
    _max: GradeMaxAggregateOutputType | null
  }

  type GetGradeGroupByPayload<T extends gradeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GradeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GradeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GradeGroupByOutputType[P]>
            : GetScalarType<T[P], GradeGroupByOutputType[P]>
        }
      >
    >


  export type gradeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gradeid?: boolean
    projectgroupid?: boolean
    facultyid?: boolean
    component?: boolean
    marks?: boolean
    maxmarks?: boolean
    feedback?: boolean
    gradedat?: boolean
    created?: boolean
    modified?: boolean
    projectgroup?: boolean | projectgroupDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grade"]>

  export type gradeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gradeid?: boolean
    projectgroupid?: boolean
    facultyid?: boolean
    component?: boolean
    marks?: boolean
    maxmarks?: boolean
    feedback?: boolean
    gradedat?: boolean
    created?: boolean
    modified?: boolean
    projectgroup?: boolean | projectgroupDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grade"]>

  export type gradeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gradeid?: boolean
    projectgroupid?: boolean
    facultyid?: boolean
    component?: boolean
    marks?: boolean
    maxmarks?: boolean
    feedback?: boolean
    gradedat?: boolean
    created?: boolean
    modified?: boolean
    projectgroup?: boolean | projectgroupDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grade"]>

  export type gradeSelectScalar = {
    gradeid?: boolean
    projectgroupid?: boolean
    facultyid?: boolean
    component?: boolean
    marks?: boolean
    maxmarks?: boolean
    feedback?: boolean
    gradedat?: boolean
    created?: boolean
    modified?: boolean
  }

  export type gradeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"gradeid" | "projectgroupid" | "facultyid" | "component" | "marks" | "maxmarks" | "feedback" | "gradedat" | "created" | "modified", ExtArgs["result"]["grade"]>
  export type gradeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectgroup?: boolean | projectgroupDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }
  export type gradeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectgroup?: boolean | projectgroupDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }
  export type gradeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectgroup?: boolean | projectgroupDefaultArgs<ExtArgs>
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }

  export type $gradePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "grade"
    objects: {
      projectgroup: Prisma.$projectgroupPayload<ExtArgs>
      staff: Prisma.$staffPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      gradeid: number
      projectgroupid: number
      facultyid: number
      component: string
      marks: number
      maxmarks: number
      feedback: string | null
      gradedat: Date
      created: Date
      modified: Date
    }, ExtArgs["result"]["grade"]>
    composites: {}
  }

  type gradeGetPayload<S extends boolean | null | undefined | gradeDefaultArgs> = $Result.GetResult<Prisma.$gradePayload, S>

  type gradeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<gradeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GradeCountAggregateInputType | true
    }

  export interface gradeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['grade'], meta: { name: 'grade' } }
    /**
     * Find zero or one Grade that matches the filter.
     * @param {gradeFindUniqueArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends gradeFindUniqueArgs>(args: SelectSubset<T, gradeFindUniqueArgs<ExtArgs>>): Prisma__gradeClient<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Grade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {gradeFindUniqueOrThrowArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends gradeFindUniqueOrThrowArgs>(args: SelectSubset<T, gradeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__gradeClient<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gradeFindFirstArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends gradeFindFirstArgs>(args?: SelectSubset<T, gradeFindFirstArgs<ExtArgs>>): Prisma__gradeClient<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gradeFindFirstOrThrowArgs} args - Arguments to find a Grade
     * @example
     * // Get one Grade
     * const grade = await prisma.grade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends gradeFindFirstOrThrowArgs>(args?: SelectSubset<T, gradeFindFirstOrThrowArgs<ExtArgs>>): Prisma__gradeClient<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Grades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gradeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Grades
     * const grades = await prisma.grade.findMany()
     * 
     * // Get first 10 Grades
     * const grades = await prisma.grade.findMany({ take: 10 })
     * 
     * // Only select the `gradeid`
     * const gradeWithGradeidOnly = await prisma.grade.findMany({ select: { gradeid: true } })
     * 
     */
    findMany<T extends gradeFindManyArgs>(args?: SelectSubset<T, gradeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Grade.
     * @param {gradeCreateArgs} args - Arguments to create a Grade.
     * @example
     * // Create one Grade
     * const Grade = await prisma.grade.create({
     *   data: {
     *     // ... data to create a Grade
     *   }
     * })
     * 
     */
    create<T extends gradeCreateArgs>(args: SelectSubset<T, gradeCreateArgs<ExtArgs>>): Prisma__gradeClient<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Grades.
     * @param {gradeCreateManyArgs} args - Arguments to create many Grades.
     * @example
     * // Create many Grades
     * const grade = await prisma.grade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends gradeCreateManyArgs>(args?: SelectSubset<T, gradeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Grades and returns the data saved in the database.
     * @param {gradeCreateManyAndReturnArgs} args - Arguments to create many Grades.
     * @example
     * // Create many Grades
     * const grade = await prisma.grade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Grades and only return the `gradeid`
     * const gradeWithGradeidOnly = await prisma.grade.createManyAndReturn({
     *   select: { gradeid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends gradeCreateManyAndReturnArgs>(args?: SelectSubset<T, gradeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Grade.
     * @param {gradeDeleteArgs} args - Arguments to delete one Grade.
     * @example
     * // Delete one Grade
     * const Grade = await prisma.grade.delete({
     *   where: {
     *     // ... filter to delete one Grade
     *   }
     * })
     * 
     */
    delete<T extends gradeDeleteArgs>(args: SelectSubset<T, gradeDeleteArgs<ExtArgs>>): Prisma__gradeClient<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Grade.
     * @param {gradeUpdateArgs} args - Arguments to update one Grade.
     * @example
     * // Update one Grade
     * const grade = await prisma.grade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends gradeUpdateArgs>(args: SelectSubset<T, gradeUpdateArgs<ExtArgs>>): Prisma__gradeClient<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Grades.
     * @param {gradeDeleteManyArgs} args - Arguments to filter Grades to delete.
     * @example
     * // Delete a few Grades
     * const { count } = await prisma.grade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends gradeDeleteManyArgs>(args?: SelectSubset<T, gradeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gradeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Grades
     * const grade = await prisma.grade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends gradeUpdateManyArgs>(args: SelectSubset<T, gradeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grades and returns the data updated in the database.
     * @param {gradeUpdateManyAndReturnArgs} args - Arguments to update many Grades.
     * @example
     * // Update many Grades
     * const grade = await prisma.grade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Grades and only return the `gradeid`
     * const gradeWithGradeidOnly = await prisma.grade.updateManyAndReturn({
     *   select: { gradeid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends gradeUpdateManyAndReturnArgs>(args: SelectSubset<T, gradeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Grade.
     * @param {gradeUpsertArgs} args - Arguments to update or create a Grade.
     * @example
     * // Update or create a Grade
     * const grade = await prisma.grade.upsert({
     *   create: {
     *     // ... data to create a Grade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Grade we want to update
     *   }
     * })
     */
    upsert<T extends gradeUpsertArgs>(args: SelectSubset<T, gradeUpsertArgs<ExtArgs>>): Prisma__gradeClient<$Result.GetResult<Prisma.$gradePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Grades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gradeCountArgs} args - Arguments to filter Grades to count.
     * @example
     * // Count the number of Grades
     * const count = await prisma.grade.count({
     *   where: {
     *     // ... the filter for the Grades we want to count
     *   }
     * })
    **/
    count<T extends gradeCountArgs>(
      args?: Subset<T, gradeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GradeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Grade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GradeAggregateArgs>(args: Subset<T, GradeAggregateArgs>): Prisma.PrismaPromise<GetGradeAggregateType<T>>

    /**
     * Group by Grade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gradeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends gradeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gradeGroupByArgs['orderBy'] }
        : { orderBy?: gradeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, gradeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGradeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the grade model
   */
  readonly fields: gradeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for grade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gradeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectgroup<T extends projectgroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, projectgroupDefaultArgs<ExtArgs>>): Prisma__projectgroupClient<$Result.GetResult<Prisma.$projectgroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    staff<T extends staffDefaultArgs<ExtArgs> = {}>(args?: Subset<T, staffDefaultArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the grade model
   */
  interface gradeFieldRefs {
    readonly gradeid: FieldRef<"grade", 'Int'>
    readonly projectgroupid: FieldRef<"grade", 'Int'>
    readonly facultyid: FieldRef<"grade", 'Int'>
    readonly component: FieldRef<"grade", 'String'>
    readonly marks: FieldRef<"grade", 'Float'>
    readonly maxmarks: FieldRef<"grade", 'Float'>
    readonly feedback: FieldRef<"grade", 'String'>
    readonly gradedat: FieldRef<"grade", 'DateTime'>
    readonly created: FieldRef<"grade", 'DateTime'>
    readonly modified: FieldRef<"grade", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * grade findUnique
   */
  export type gradeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grade
     */
    omit?: gradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gradeInclude<ExtArgs> | null
    /**
     * Filter, which grade to fetch.
     */
    where: gradeWhereUniqueInput
  }

  /**
   * grade findUniqueOrThrow
   */
  export type gradeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grade
     */
    omit?: gradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gradeInclude<ExtArgs> | null
    /**
     * Filter, which grade to fetch.
     */
    where: gradeWhereUniqueInput
  }

  /**
   * grade findFirst
   */
  export type gradeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grade
     */
    omit?: gradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gradeInclude<ExtArgs> | null
    /**
     * Filter, which grade to fetch.
     */
    where?: gradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grades to fetch.
     */
    orderBy?: gradeOrderByWithRelationInput | gradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for grades.
     */
    cursor?: gradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of grades.
     */
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * grade findFirstOrThrow
   */
  export type gradeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grade
     */
    omit?: gradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gradeInclude<ExtArgs> | null
    /**
     * Filter, which grade to fetch.
     */
    where?: gradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grades to fetch.
     */
    orderBy?: gradeOrderByWithRelationInput | gradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for grades.
     */
    cursor?: gradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of grades.
     */
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * grade findMany
   */
  export type gradeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grade
     */
    omit?: gradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gradeInclude<ExtArgs> | null
    /**
     * Filter, which grades to fetch.
     */
    where?: gradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of grades to fetch.
     */
    orderBy?: gradeOrderByWithRelationInput | gradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing grades.
     */
    cursor?: gradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` grades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` grades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of grades.
     */
    distinct?: GradeScalarFieldEnum | GradeScalarFieldEnum[]
  }

  /**
   * grade create
   */
  export type gradeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grade
     */
    omit?: gradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gradeInclude<ExtArgs> | null
    /**
     * The data needed to create a grade.
     */
    data: XOR<gradeCreateInput, gradeUncheckedCreateInput>
  }

  /**
   * grade createMany
   */
  export type gradeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many grades.
     */
    data: gradeCreateManyInput | gradeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * grade createManyAndReturn
   */
  export type gradeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the grade
     */
    omit?: gradeOmit<ExtArgs> | null
    /**
     * The data used to create many grades.
     */
    data: gradeCreateManyInput | gradeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gradeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * grade update
   */
  export type gradeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grade
     */
    omit?: gradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gradeInclude<ExtArgs> | null
    /**
     * The data needed to update a grade.
     */
    data: XOR<gradeUpdateInput, gradeUncheckedUpdateInput>
    /**
     * Choose, which grade to update.
     */
    where: gradeWhereUniqueInput
  }

  /**
   * grade updateMany
   */
  export type gradeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update grades.
     */
    data: XOR<gradeUpdateManyMutationInput, gradeUncheckedUpdateManyInput>
    /**
     * Filter which grades to update
     */
    where?: gradeWhereInput
    /**
     * Limit how many grades to update.
     */
    limit?: number
  }

  /**
   * grade updateManyAndReturn
   */
  export type gradeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the grade
     */
    omit?: gradeOmit<ExtArgs> | null
    /**
     * The data used to update grades.
     */
    data: XOR<gradeUpdateManyMutationInput, gradeUncheckedUpdateManyInput>
    /**
     * Filter which grades to update
     */
    where?: gradeWhereInput
    /**
     * Limit how many grades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gradeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * grade upsert
   */
  export type gradeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grade
     */
    omit?: gradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gradeInclude<ExtArgs> | null
    /**
     * The filter to search for the grade to update in case it exists.
     */
    where: gradeWhereUniqueInput
    /**
     * In case the grade found by the `where` argument doesn't exist, create a new grade with this data.
     */
    create: XOR<gradeCreateInput, gradeUncheckedCreateInput>
    /**
     * In case the grade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gradeUpdateInput, gradeUncheckedUpdateInput>
  }

  /**
   * grade delete
   */
  export type gradeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grade
     */
    omit?: gradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gradeInclude<ExtArgs> | null
    /**
     * Filter which grade to delete.
     */
    where: gradeWhereUniqueInput
  }

  /**
   * grade deleteMany
   */
  export type gradeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which grades to delete
     */
    where?: gradeWhereInput
    /**
     * Limit how many grades to delete.
     */
    limit?: number
  }

  /**
   * grade without action
   */
  export type gradeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the grade
     */
    select?: gradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the grade
     */
    omit?: gradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gradeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProjectgroupScalarFieldEnum: {
    projectgroupid: 'projectgroupid',
    projecttypeid: 'projecttypeid',
    projectgroupname: 'projectgroupname',
    projecttitle: 'projecttitle',
    projectarea: 'projectarea',
    projectdescription: 'projectdescription',
    averagecpi: 'averagecpi',
    description: 'description',
    convenerstaffid: 'convenerstaffid',
    expertstaffid: 'expertstaffid',
    status: 'status',
    created: 'created',
    modified: 'modified'
  };

  export type ProjectgroupScalarFieldEnum = (typeof ProjectgroupScalarFieldEnum)[keyof typeof ProjectgroupScalarFieldEnum]


  export const GrouprequestScalarFieldEnum: {
    requestid: 'requestid',
    groupname: 'groupname',
    projecttitle: 'projecttitle',
    projectarea: 'projectarea',
    projectdescription: 'projectdescription',
    technologies: 'technologies',
    leaderid: 'leaderid',
    memberdata: 'memberdata',
    status: 'status',
    rejectionreason: 'rejectionreason',
    created: 'created',
    modified: 'modified',
    approvedby: 'approvedby'
  };

  export type GrouprequestScalarFieldEnum = (typeof GrouprequestScalarFieldEnum)[keyof typeof GrouprequestScalarFieldEnum]


  export const ProjectgroupmemberScalarFieldEnum: {
    projectgroupmemberid: 'projectgroupmemberid',
    isgroupleader: 'isgroupleader',
    studentcgpa: 'studentcgpa',
    projectgroupid: 'projectgroupid',
    studentid: 'studentid',
    description: 'description',
    created: 'created',
    modified: 'modified'
  };

  export type ProjectgroupmemberScalarFieldEnum = (typeof ProjectgroupmemberScalarFieldEnum)[keyof typeof ProjectgroupmemberScalarFieldEnum]


  export const ProjectmeetingScalarFieldEnum: {
    projectmeetingid: 'projectmeetingid',
    projectgroupid: 'projectgroupid',
    guidestaffid: 'guidestaffid',
    meetingdatetime: 'meetingdatetime',
    meetingpurpose: 'meetingpurpose',
    meetinglocation: 'meetinglocation',
    meetingnotes: 'meetingnotes',
    meetingstatus: 'meetingstatus',
    meetingstatusdescription: 'meetingstatusdescription',
    meetingstatusdatetime: 'meetingstatusdatetime',
    description: 'description',
    created: 'created',
    modified: 'modified'
  };

  export type ProjectmeetingScalarFieldEnum = (typeof ProjectmeetingScalarFieldEnum)[keyof typeof ProjectmeetingScalarFieldEnum]


  export const ProjectmeetingattendanceScalarFieldEnum: {
    projectmeetingattendanceid: 'projectmeetingattendanceid',
    studentid: 'studentid',
    projectmeetingid: 'projectmeetingid',
    ispresent: 'ispresent',
    attendanceremarks: 'attendanceremarks',
    description: 'description',
    created: 'created',
    modified: 'modified'
  };

  export type ProjectmeetingattendanceScalarFieldEnum = (typeof ProjectmeetingattendanceScalarFieldEnum)[keyof typeof ProjectmeetingattendanceScalarFieldEnum]


  export const ProjecttypeScalarFieldEnum: {
    projecttypeid: 'projecttypeid',
    projecttypename: 'projecttypename',
    description: 'description',
    created: 'created',
    modified: 'modified'
  };

  export type ProjecttypeScalarFieldEnum = (typeof ProjecttypeScalarFieldEnum)[keyof typeof ProjecttypeScalarFieldEnum]


  export const StaffScalarFieldEnum: {
    staffid: 'staffid',
    staffname: 'staffname',
    phone: 'phone',
    email: 'email',
    password: 'password',
    role: 'role',
    description: 'description',
    created: 'created',
    modified: 'modified',
    registeredby: 'registeredby',
    profileimage: 'profileimage'
  };

  export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    studentid: 'studentid',
    studentname: 'studentname',
    phone: 'phone',
    email: 'email',
    password: 'password',
    description: 'description',
    created: 'created',
    modified: 'modified',
    registeredby: 'registeredby',
    profileimage: 'profileimage'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const ActivitylogScalarFieldEnum: {
    activityid: 'activityid',
    type: 'type',
    detail: 'detail',
    userid: 'userid',
    userrole: 'userrole',
    created: 'created'
  };

  export type ActivitylogScalarFieldEnum = (typeof ActivitylogScalarFieldEnum)[keyof typeof ActivitylogScalarFieldEnum]


  export const GradeScalarFieldEnum: {
    gradeid: 'gradeid',
    projectgroupid: 'projectgroupid',
    facultyid: 'facultyid',
    component: 'component',
    marks: 'marks',
    maxmarks: 'maxmarks',
    feedback: 'feedback',
    gradedat: 'gradedat',
    created: 'created',
    modified: 'modified'
  };

  export type GradeScalarFieldEnum = (typeof GradeScalarFieldEnum)[keyof typeof GradeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type projectgroupWhereInput = {
    AND?: projectgroupWhereInput | projectgroupWhereInput[]
    OR?: projectgroupWhereInput[]
    NOT?: projectgroupWhereInput | projectgroupWhereInput[]
    projectgroupid?: IntFilter<"projectgroup"> | number
    projecttypeid?: IntNullableFilter<"projectgroup"> | number | null
    projectgroupname?: StringNullableFilter<"projectgroup"> | string | null
    projecttitle?: StringNullableFilter<"projectgroup"> | string | null
    projectarea?: StringNullableFilter<"projectgroup"> | string | null
    projectdescription?: StringNullableFilter<"projectgroup"> | string | null
    averagecpi?: FloatNullableFilter<"projectgroup"> | number | null
    description?: StringNullableFilter<"projectgroup"> | string | null
    convenerstaffid?: IntNullableFilter<"projectgroup"> | number | null
    expertstaffid?: IntNullableFilter<"projectgroup"> | number | null
    status?: StringNullableFilter<"projectgroup"> | string | null
    created?: DateTimeNullableFilter<"projectgroup"> | Date | string | null
    modified?: DateTimeNullableFilter<"projectgroup"> | Date | string | null
    staff_projectgroup_convenerstaffidTostaff?: XOR<StaffNullableScalarRelationFilter, staffWhereInput> | null
    staff_projectgroup_expertstaffidTostaff?: XOR<StaffNullableScalarRelationFilter, staffWhereInput> | null
    projecttype?: XOR<ProjecttypeNullableScalarRelationFilter, projecttypeWhereInput> | null
    projectgroupmember?: ProjectgroupmemberListRelationFilter
    projectmeeting?: ProjectmeetingListRelationFilter
    grade?: GradeListRelationFilter
  }

  export type projectgroupOrderByWithRelationInput = {
    projectgroupid?: SortOrder
    projecttypeid?: SortOrderInput | SortOrder
    projectgroupname?: SortOrderInput | SortOrder
    projecttitle?: SortOrderInput | SortOrder
    projectarea?: SortOrderInput | SortOrder
    projectdescription?: SortOrderInput | SortOrder
    averagecpi?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    convenerstaffid?: SortOrderInput | SortOrder
    expertstaffid?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created?: SortOrderInput | SortOrder
    modified?: SortOrderInput | SortOrder
    staff_projectgroup_convenerstaffidTostaff?: staffOrderByWithRelationInput
    staff_projectgroup_expertstaffidTostaff?: staffOrderByWithRelationInput
    projecttype?: projecttypeOrderByWithRelationInput
    projectgroupmember?: projectgroupmemberOrderByRelationAggregateInput
    projectmeeting?: projectmeetingOrderByRelationAggregateInput
    grade?: gradeOrderByRelationAggregateInput
  }

  export type projectgroupWhereUniqueInput = Prisma.AtLeast<{
    projectgroupid?: number
    AND?: projectgroupWhereInput | projectgroupWhereInput[]
    OR?: projectgroupWhereInput[]
    NOT?: projectgroupWhereInput | projectgroupWhereInput[]
    projecttypeid?: IntNullableFilter<"projectgroup"> | number | null
    projectgroupname?: StringNullableFilter<"projectgroup"> | string | null
    projecttitle?: StringNullableFilter<"projectgroup"> | string | null
    projectarea?: StringNullableFilter<"projectgroup"> | string | null
    projectdescription?: StringNullableFilter<"projectgroup"> | string | null
    averagecpi?: FloatNullableFilter<"projectgroup"> | number | null
    description?: StringNullableFilter<"projectgroup"> | string | null
    convenerstaffid?: IntNullableFilter<"projectgroup"> | number | null
    expertstaffid?: IntNullableFilter<"projectgroup"> | number | null
    status?: StringNullableFilter<"projectgroup"> | string | null
    created?: DateTimeNullableFilter<"projectgroup"> | Date | string | null
    modified?: DateTimeNullableFilter<"projectgroup"> | Date | string | null
    staff_projectgroup_convenerstaffidTostaff?: XOR<StaffNullableScalarRelationFilter, staffWhereInput> | null
    staff_projectgroup_expertstaffidTostaff?: XOR<StaffNullableScalarRelationFilter, staffWhereInput> | null
    projecttype?: XOR<ProjecttypeNullableScalarRelationFilter, projecttypeWhereInput> | null
    projectgroupmember?: ProjectgroupmemberListRelationFilter
    projectmeeting?: ProjectmeetingListRelationFilter
    grade?: GradeListRelationFilter
  }, "projectgroupid">

  export type projectgroupOrderByWithAggregationInput = {
    projectgroupid?: SortOrder
    projecttypeid?: SortOrderInput | SortOrder
    projectgroupname?: SortOrderInput | SortOrder
    projecttitle?: SortOrderInput | SortOrder
    projectarea?: SortOrderInput | SortOrder
    projectdescription?: SortOrderInput | SortOrder
    averagecpi?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    convenerstaffid?: SortOrderInput | SortOrder
    expertstaffid?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created?: SortOrderInput | SortOrder
    modified?: SortOrderInput | SortOrder
    _count?: projectgroupCountOrderByAggregateInput
    _avg?: projectgroupAvgOrderByAggregateInput
    _max?: projectgroupMaxOrderByAggregateInput
    _min?: projectgroupMinOrderByAggregateInput
    _sum?: projectgroupSumOrderByAggregateInput
  }

  export type projectgroupScalarWhereWithAggregatesInput = {
    AND?: projectgroupScalarWhereWithAggregatesInput | projectgroupScalarWhereWithAggregatesInput[]
    OR?: projectgroupScalarWhereWithAggregatesInput[]
    NOT?: projectgroupScalarWhereWithAggregatesInput | projectgroupScalarWhereWithAggregatesInput[]
    projectgroupid?: IntWithAggregatesFilter<"projectgroup"> | number
    projecttypeid?: IntNullableWithAggregatesFilter<"projectgroup"> | number | null
    projectgroupname?: StringNullableWithAggregatesFilter<"projectgroup"> | string | null
    projecttitle?: StringNullableWithAggregatesFilter<"projectgroup"> | string | null
    projectarea?: StringNullableWithAggregatesFilter<"projectgroup"> | string | null
    projectdescription?: StringNullableWithAggregatesFilter<"projectgroup"> | string | null
    averagecpi?: FloatNullableWithAggregatesFilter<"projectgroup"> | number | null
    description?: StringNullableWithAggregatesFilter<"projectgroup"> | string | null
    convenerstaffid?: IntNullableWithAggregatesFilter<"projectgroup"> | number | null
    expertstaffid?: IntNullableWithAggregatesFilter<"projectgroup"> | number | null
    status?: StringNullableWithAggregatesFilter<"projectgroup"> | string | null
    created?: DateTimeNullableWithAggregatesFilter<"projectgroup"> | Date | string | null
    modified?: DateTimeNullableWithAggregatesFilter<"projectgroup"> | Date | string | null
  }

  export type grouprequestWhereInput = {
    AND?: grouprequestWhereInput | grouprequestWhereInput[]
    OR?: grouprequestWhereInput[]
    NOT?: grouprequestWhereInput | grouprequestWhereInput[]
    requestid?: IntFilter<"grouprequest"> | number
    groupname?: StringFilter<"grouprequest"> | string
    projecttitle?: StringFilter<"grouprequest"> | string
    projectarea?: StringNullableFilter<"grouprequest"> | string | null
    projectdescription?: StringNullableFilter<"grouprequest"> | string | null
    technologies?: StringNullableFilter<"grouprequest"> | string | null
    leaderid?: IntFilter<"grouprequest"> | number
    memberdata?: StringFilter<"grouprequest"> | string
    status?: StringFilter<"grouprequest"> | string
    rejectionreason?: StringNullableFilter<"grouprequest"> | string | null
    created?: DateTimeFilter<"grouprequest"> | Date | string
    modified?: DateTimeFilter<"grouprequest"> | Date | string
    approvedby?: IntNullableFilter<"grouprequest"> | number | null
    leader?: XOR<StudentScalarRelationFilter, studentWhereInput>
    approver?: XOR<StaffNullableScalarRelationFilter, staffWhereInput> | null
  }

  export type grouprequestOrderByWithRelationInput = {
    requestid?: SortOrder
    groupname?: SortOrder
    projecttitle?: SortOrder
    projectarea?: SortOrderInput | SortOrder
    projectdescription?: SortOrderInput | SortOrder
    technologies?: SortOrderInput | SortOrder
    leaderid?: SortOrder
    memberdata?: SortOrder
    status?: SortOrder
    rejectionreason?: SortOrderInput | SortOrder
    created?: SortOrder
    modified?: SortOrder
    approvedby?: SortOrderInput | SortOrder
    leader?: studentOrderByWithRelationInput
    approver?: staffOrderByWithRelationInput
  }

  export type grouprequestWhereUniqueInput = Prisma.AtLeast<{
    requestid?: number
    AND?: grouprequestWhereInput | grouprequestWhereInput[]
    OR?: grouprequestWhereInput[]
    NOT?: grouprequestWhereInput | grouprequestWhereInput[]
    groupname?: StringFilter<"grouprequest"> | string
    projecttitle?: StringFilter<"grouprequest"> | string
    projectarea?: StringNullableFilter<"grouprequest"> | string | null
    projectdescription?: StringNullableFilter<"grouprequest"> | string | null
    technologies?: StringNullableFilter<"grouprequest"> | string | null
    leaderid?: IntFilter<"grouprequest"> | number
    memberdata?: StringFilter<"grouprequest"> | string
    status?: StringFilter<"grouprequest"> | string
    rejectionreason?: StringNullableFilter<"grouprequest"> | string | null
    created?: DateTimeFilter<"grouprequest"> | Date | string
    modified?: DateTimeFilter<"grouprequest"> | Date | string
    approvedby?: IntNullableFilter<"grouprequest"> | number | null
    leader?: XOR<StudentScalarRelationFilter, studentWhereInput>
    approver?: XOR<StaffNullableScalarRelationFilter, staffWhereInput> | null
  }, "requestid">

  export type grouprequestOrderByWithAggregationInput = {
    requestid?: SortOrder
    groupname?: SortOrder
    projecttitle?: SortOrder
    projectarea?: SortOrderInput | SortOrder
    projectdescription?: SortOrderInput | SortOrder
    technologies?: SortOrderInput | SortOrder
    leaderid?: SortOrder
    memberdata?: SortOrder
    status?: SortOrder
    rejectionreason?: SortOrderInput | SortOrder
    created?: SortOrder
    modified?: SortOrder
    approvedby?: SortOrderInput | SortOrder
    _count?: grouprequestCountOrderByAggregateInput
    _avg?: grouprequestAvgOrderByAggregateInput
    _max?: grouprequestMaxOrderByAggregateInput
    _min?: grouprequestMinOrderByAggregateInput
    _sum?: grouprequestSumOrderByAggregateInput
  }

  export type grouprequestScalarWhereWithAggregatesInput = {
    AND?: grouprequestScalarWhereWithAggregatesInput | grouprequestScalarWhereWithAggregatesInput[]
    OR?: grouprequestScalarWhereWithAggregatesInput[]
    NOT?: grouprequestScalarWhereWithAggregatesInput | grouprequestScalarWhereWithAggregatesInput[]
    requestid?: IntWithAggregatesFilter<"grouprequest"> | number
    groupname?: StringWithAggregatesFilter<"grouprequest"> | string
    projecttitle?: StringWithAggregatesFilter<"grouprequest"> | string
    projectarea?: StringNullableWithAggregatesFilter<"grouprequest"> | string | null
    projectdescription?: StringNullableWithAggregatesFilter<"grouprequest"> | string | null
    technologies?: StringNullableWithAggregatesFilter<"grouprequest"> | string | null
    leaderid?: IntWithAggregatesFilter<"grouprequest"> | number
    memberdata?: StringWithAggregatesFilter<"grouprequest"> | string
    status?: StringWithAggregatesFilter<"grouprequest"> | string
    rejectionreason?: StringNullableWithAggregatesFilter<"grouprequest"> | string | null
    created?: DateTimeWithAggregatesFilter<"grouprequest"> | Date | string
    modified?: DateTimeWithAggregatesFilter<"grouprequest"> | Date | string
    approvedby?: IntNullableWithAggregatesFilter<"grouprequest"> | number | null
  }

  export type projectgroupmemberWhereInput = {
    AND?: projectgroupmemberWhereInput | projectgroupmemberWhereInput[]
    OR?: projectgroupmemberWhereInput[]
    NOT?: projectgroupmemberWhereInput | projectgroupmemberWhereInput[]
    projectgroupmemberid?: IntFilter<"projectgroupmember"> | number
    isgroupleader?: BoolNullableFilter<"projectgroupmember"> | boolean | null
    studentcgpa?: FloatNullableFilter<"projectgroupmember"> | number | null
    projectgroupid?: IntNullableFilter<"projectgroupmember"> | number | null
    studentid?: IntNullableFilter<"projectgroupmember"> | number | null
    description?: StringNullableFilter<"projectgroupmember"> | string | null
    created?: DateTimeNullableFilter<"projectgroupmember"> | Date | string | null
    modified?: DateTimeNullableFilter<"projectgroupmember"> | Date | string | null
    projectgroup?: XOR<ProjectgroupNullableScalarRelationFilter, projectgroupWhereInput> | null
    student?: XOR<StudentNullableScalarRelationFilter, studentWhereInput> | null
  }

  export type projectgroupmemberOrderByWithRelationInput = {
    projectgroupmemberid?: SortOrder
    isgroupleader?: SortOrderInput | SortOrder
    studentcgpa?: SortOrderInput | SortOrder
    projectgroupid?: SortOrderInput | SortOrder
    studentid?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created?: SortOrderInput | SortOrder
    modified?: SortOrderInput | SortOrder
    projectgroup?: projectgroupOrderByWithRelationInput
    student?: studentOrderByWithRelationInput
  }

  export type projectgroupmemberWhereUniqueInput = Prisma.AtLeast<{
    projectgroupmemberid?: number
    AND?: projectgroupmemberWhereInput | projectgroupmemberWhereInput[]
    OR?: projectgroupmemberWhereInput[]
    NOT?: projectgroupmemberWhereInput | projectgroupmemberWhereInput[]
    isgroupleader?: BoolNullableFilter<"projectgroupmember"> | boolean | null
    studentcgpa?: FloatNullableFilter<"projectgroupmember"> | number | null
    projectgroupid?: IntNullableFilter<"projectgroupmember"> | number | null
    studentid?: IntNullableFilter<"projectgroupmember"> | number | null
    description?: StringNullableFilter<"projectgroupmember"> | string | null
    created?: DateTimeNullableFilter<"projectgroupmember"> | Date | string | null
    modified?: DateTimeNullableFilter<"projectgroupmember"> | Date | string | null
    projectgroup?: XOR<ProjectgroupNullableScalarRelationFilter, projectgroupWhereInput> | null
    student?: XOR<StudentNullableScalarRelationFilter, studentWhereInput> | null
  }, "projectgroupmemberid">

  export type projectgroupmemberOrderByWithAggregationInput = {
    projectgroupmemberid?: SortOrder
    isgroupleader?: SortOrderInput | SortOrder
    studentcgpa?: SortOrderInput | SortOrder
    projectgroupid?: SortOrderInput | SortOrder
    studentid?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created?: SortOrderInput | SortOrder
    modified?: SortOrderInput | SortOrder
    _count?: projectgroupmemberCountOrderByAggregateInput
    _avg?: projectgroupmemberAvgOrderByAggregateInput
    _max?: projectgroupmemberMaxOrderByAggregateInput
    _min?: projectgroupmemberMinOrderByAggregateInput
    _sum?: projectgroupmemberSumOrderByAggregateInput
  }

  export type projectgroupmemberScalarWhereWithAggregatesInput = {
    AND?: projectgroupmemberScalarWhereWithAggregatesInput | projectgroupmemberScalarWhereWithAggregatesInput[]
    OR?: projectgroupmemberScalarWhereWithAggregatesInput[]
    NOT?: projectgroupmemberScalarWhereWithAggregatesInput | projectgroupmemberScalarWhereWithAggregatesInput[]
    projectgroupmemberid?: IntWithAggregatesFilter<"projectgroupmember"> | number
    isgroupleader?: BoolNullableWithAggregatesFilter<"projectgroupmember"> | boolean | null
    studentcgpa?: FloatNullableWithAggregatesFilter<"projectgroupmember"> | number | null
    projectgroupid?: IntNullableWithAggregatesFilter<"projectgroupmember"> | number | null
    studentid?: IntNullableWithAggregatesFilter<"projectgroupmember"> | number | null
    description?: StringNullableWithAggregatesFilter<"projectgroupmember"> | string | null
    created?: DateTimeNullableWithAggregatesFilter<"projectgroupmember"> | Date | string | null
    modified?: DateTimeNullableWithAggregatesFilter<"projectgroupmember"> | Date | string | null
  }

  export type projectmeetingWhereInput = {
    AND?: projectmeetingWhereInput | projectmeetingWhereInput[]
    OR?: projectmeetingWhereInput[]
    NOT?: projectmeetingWhereInput | projectmeetingWhereInput[]
    projectmeetingid?: IntFilter<"projectmeeting"> | number
    projectgroupid?: IntNullableFilter<"projectmeeting"> | number | null
    guidestaffid?: IntNullableFilter<"projectmeeting"> | number | null
    meetingdatetime?: DateTimeNullableFilter<"projectmeeting"> | Date | string | null
    meetingpurpose?: StringNullableFilter<"projectmeeting"> | string | null
    meetinglocation?: StringNullableFilter<"projectmeeting"> | string | null
    meetingnotes?: StringNullableFilter<"projectmeeting"> | string | null
    meetingstatus?: StringNullableFilter<"projectmeeting"> | string | null
    meetingstatusdescription?: StringNullableFilter<"projectmeeting"> | string | null
    meetingstatusdatetime?: DateTimeNullableFilter<"projectmeeting"> | Date | string | null
    description?: StringNullableFilter<"projectmeeting"> | string | null
    created?: DateTimeNullableFilter<"projectmeeting"> | Date | string | null
    modified?: DateTimeNullableFilter<"projectmeeting"> | Date | string | null
    staff?: XOR<StaffNullableScalarRelationFilter, staffWhereInput> | null
    projectgroup?: XOR<ProjectgroupNullableScalarRelationFilter, projectgroupWhereInput> | null
    projectmeetingattendance?: ProjectmeetingattendanceListRelationFilter
  }

  export type projectmeetingOrderByWithRelationInput = {
    projectmeetingid?: SortOrder
    projectgroupid?: SortOrderInput | SortOrder
    guidestaffid?: SortOrderInput | SortOrder
    meetingdatetime?: SortOrderInput | SortOrder
    meetingpurpose?: SortOrderInput | SortOrder
    meetinglocation?: SortOrderInput | SortOrder
    meetingnotes?: SortOrderInput | SortOrder
    meetingstatus?: SortOrderInput | SortOrder
    meetingstatusdescription?: SortOrderInput | SortOrder
    meetingstatusdatetime?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created?: SortOrderInput | SortOrder
    modified?: SortOrderInput | SortOrder
    staff?: staffOrderByWithRelationInput
    projectgroup?: projectgroupOrderByWithRelationInput
    projectmeetingattendance?: projectmeetingattendanceOrderByRelationAggregateInput
  }

  export type projectmeetingWhereUniqueInput = Prisma.AtLeast<{
    projectmeetingid?: number
    AND?: projectmeetingWhereInput | projectmeetingWhereInput[]
    OR?: projectmeetingWhereInput[]
    NOT?: projectmeetingWhereInput | projectmeetingWhereInput[]
    projectgroupid?: IntNullableFilter<"projectmeeting"> | number | null
    guidestaffid?: IntNullableFilter<"projectmeeting"> | number | null
    meetingdatetime?: DateTimeNullableFilter<"projectmeeting"> | Date | string | null
    meetingpurpose?: StringNullableFilter<"projectmeeting"> | string | null
    meetinglocation?: StringNullableFilter<"projectmeeting"> | string | null
    meetingnotes?: StringNullableFilter<"projectmeeting"> | string | null
    meetingstatus?: StringNullableFilter<"projectmeeting"> | string | null
    meetingstatusdescription?: StringNullableFilter<"projectmeeting"> | string | null
    meetingstatusdatetime?: DateTimeNullableFilter<"projectmeeting"> | Date | string | null
    description?: StringNullableFilter<"projectmeeting"> | string | null
    created?: DateTimeNullableFilter<"projectmeeting"> | Date | string | null
    modified?: DateTimeNullableFilter<"projectmeeting"> | Date | string | null
    staff?: XOR<StaffNullableScalarRelationFilter, staffWhereInput> | null
    projectgroup?: XOR<ProjectgroupNullableScalarRelationFilter, projectgroupWhereInput> | null
    projectmeetingattendance?: ProjectmeetingattendanceListRelationFilter
  }, "projectmeetingid">

  export type projectmeetingOrderByWithAggregationInput = {
    projectmeetingid?: SortOrder
    projectgroupid?: SortOrderInput | SortOrder
    guidestaffid?: SortOrderInput | SortOrder
    meetingdatetime?: SortOrderInput | SortOrder
    meetingpurpose?: SortOrderInput | SortOrder
    meetinglocation?: SortOrderInput | SortOrder
    meetingnotes?: SortOrderInput | SortOrder
    meetingstatus?: SortOrderInput | SortOrder
    meetingstatusdescription?: SortOrderInput | SortOrder
    meetingstatusdatetime?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created?: SortOrderInput | SortOrder
    modified?: SortOrderInput | SortOrder
    _count?: projectmeetingCountOrderByAggregateInput
    _avg?: projectmeetingAvgOrderByAggregateInput
    _max?: projectmeetingMaxOrderByAggregateInput
    _min?: projectmeetingMinOrderByAggregateInput
    _sum?: projectmeetingSumOrderByAggregateInput
  }

  export type projectmeetingScalarWhereWithAggregatesInput = {
    AND?: projectmeetingScalarWhereWithAggregatesInput | projectmeetingScalarWhereWithAggregatesInput[]
    OR?: projectmeetingScalarWhereWithAggregatesInput[]
    NOT?: projectmeetingScalarWhereWithAggregatesInput | projectmeetingScalarWhereWithAggregatesInput[]
    projectmeetingid?: IntWithAggregatesFilter<"projectmeeting"> | number
    projectgroupid?: IntNullableWithAggregatesFilter<"projectmeeting"> | number | null
    guidestaffid?: IntNullableWithAggregatesFilter<"projectmeeting"> | number | null
    meetingdatetime?: DateTimeNullableWithAggregatesFilter<"projectmeeting"> | Date | string | null
    meetingpurpose?: StringNullableWithAggregatesFilter<"projectmeeting"> | string | null
    meetinglocation?: StringNullableWithAggregatesFilter<"projectmeeting"> | string | null
    meetingnotes?: StringNullableWithAggregatesFilter<"projectmeeting"> | string | null
    meetingstatus?: StringNullableWithAggregatesFilter<"projectmeeting"> | string | null
    meetingstatusdescription?: StringNullableWithAggregatesFilter<"projectmeeting"> | string | null
    meetingstatusdatetime?: DateTimeNullableWithAggregatesFilter<"projectmeeting"> | Date | string | null
    description?: StringNullableWithAggregatesFilter<"projectmeeting"> | string | null
    created?: DateTimeNullableWithAggregatesFilter<"projectmeeting"> | Date | string | null
    modified?: DateTimeNullableWithAggregatesFilter<"projectmeeting"> | Date | string | null
  }

  export type projectmeetingattendanceWhereInput = {
    AND?: projectmeetingattendanceWhereInput | projectmeetingattendanceWhereInput[]
    OR?: projectmeetingattendanceWhereInput[]
    NOT?: projectmeetingattendanceWhereInput | projectmeetingattendanceWhereInput[]
    projectmeetingattendanceid?: IntFilter<"projectmeetingattendance"> | number
    studentid?: IntNullableFilter<"projectmeetingattendance"> | number | null
    projectmeetingid?: IntNullableFilter<"projectmeetingattendance"> | number | null
    ispresent?: BoolNullableFilter<"projectmeetingattendance"> | boolean | null
    attendanceremarks?: StringNullableFilter<"projectmeetingattendance"> | string | null
    description?: StringNullableFilter<"projectmeetingattendance"> | string | null
    created?: DateTimeNullableFilter<"projectmeetingattendance"> | Date | string | null
    modified?: DateTimeNullableFilter<"projectmeetingattendance"> | Date | string | null
    projectmeeting?: XOR<ProjectmeetingNullableScalarRelationFilter, projectmeetingWhereInput> | null
    student?: XOR<StudentNullableScalarRelationFilter, studentWhereInput> | null
  }

  export type projectmeetingattendanceOrderByWithRelationInput = {
    projectmeetingattendanceid?: SortOrder
    studentid?: SortOrderInput | SortOrder
    projectmeetingid?: SortOrderInput | SortOrder
    ispresent?: SortOrderInput | SortOrder
    attendanceremarks?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created?: SortOrderInput | SortOrder
    modified?: SortOrderInput | SortOrder
    projectmeeting?: projectmeetingOrderByWithRelationInput
    student?: studentOrderByWithRelationInput
  }

  export type projectmeetingattendanceWhereUniqueInput = Prisma.AtLeast<{
    projectmeetingattendanceid?: number
    AND?: projectmeetingattendanceWhereInput | projectmeetingattendanceWhereInput[]
    OR?: projectmeetingattendanceWhereInput[]
    NOT?: projectmeetingattendanceWhereInput | projectmeetingattendanceWhereInput[]
    studentid?: IntNullableFilter<"projectmeetingattendance"> | number | null
    projectmeetingid?: IntNullableFilter<"projectmeetingattendance"> | number | null
    ispresent?: BoolNullableFilter<"projectmeetingattendance"> | boolean | null
    attendanceremarks?: StringNullableFilter<"projectmeetingattendance"> | string | null
    description?: StringNullableFilter<"projectmeetingattendance"> | string | null
    created?: DateTimeNullableFilter<"projectmeetingattendance"> | Date | string | null
    modified?: DateTimeNullableFilter<"projectmeetingattendance"> | Date | string | null
    projectmeeting?: XOR<ProjectmeetingNullableScalarRelationFilter, projectmeetingWhereInput> | null
    student?: XOR<StudentNullableScalarRelationFilter, studentWhereInput> | null
  }, "projectmeetingattendanceid">

  export type projectmeetingattendanceOrderByWithAggregationInput = {
    projectmeetingattendanceid?: SortOrder
    studentid?: SortOrderInput | SortOrder
    projectmeetingid?: SortOrderInput | SortOrder
    ispresent?: SortOrderInput | SortOrder
    attendanceremarks?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created?: SortOrderInput | SortOrder
    modified?: SortOrderInput | SortOrder
    _count?: projectmeetingattendanceCountOrderByAggregateInput
    _avg?: projectmeetingattendanceAvgOrderByAggregateInput
    _max?: projectmeetingattendanceMaxOrderByAggregateInput
    _min?: projectmeetingattendanceMinOrderByAggregateInput
    _sum?: projectmeetingattendanceSumOrderByAggregateInput
  }

  export type projectmeetingattendanceScalarWhereWithAggregatesInput = {
    AND?: projectmeetingattendanceScalarWhereWithAggregatesInput | projectmeetingattendanceScalarWhereWithAggregatesInput[]
    OR?: projectmeetingattendanceScalarWhereWithAggregatesInput[]
    NOT?: projectmeetingattendanceScalarWhereWithAggregatesInput | projectmeetingattendanceScalarWhereWithAggregatesInput[]
    projectmeetingattendanceid?: IntWithAggregatesFilter<"projectmeetingattendance"> | number
    studentid?: IntNullableWithAggregatesFilter<"projectmeetingattendance"> | number | null
    projectmeetingid?: IntNullableWithAggregatesFilter<"projectmeetingattendance"> | number | null
    ispresent?: BoolNullableWithAggregatesFilter<"projectmeetingattendance"> | boolean | null
    attendanceremarks?: StringNullableWithAggregatesFilter<"projectmeetingattendance"> | string | null
    description?: StringNullableWithAggregatesFilter<"projectmeetingattendance"> | string | null
    created?: DateTimeNullableWithAggregatesFilter<"projectmeetingattendance"> | Date | string | null
    modified?: DateTimeNullableWithAggregatesFilter<"projectmeetingattendance"> | Date | string | null
  }

  export type projecttypeWhereInput = {
    AND?: projecttypeWhereInput | projecttypeWhereInput[]
    OR?: projecttypeWhereInput[]
    NOT?: projecttypeWhereInput | projecttypeWhereInput[]
    projecttypeid?: IntFilter<"projecttype"> | number
    projecttypename?: StringFilter<"projecttype"> | string
    description?: StringNullableFilter<"projecttype"> | string | null
    created?: DateTimeNullableFilter<"projecttype"> | Date | string | null
    modified?: DateTimeNullableFilter<"projecttype"> | Date | string | null
    projectgroup?: ProjectgroupListRelationFilter
  }

  export type projecttypeOrderByWithRelationInput = {
    projecttypeid?: SortOrder
    projecttypename?: SortOrder
    description?: SortOrderInput | SortOrder
    created?: SortOrderInput | SortOrder
    modified?: SortOrderInput | SortOrder
    projectgroup?: projectgroupOrderByRelationAggregateInput
  }

  export type projecttypeWhereUniqueInput = Prisma.AtLeast<{
    projecttypeid?: number
    AND?: projecttypeWhereInput | projecttypeWhereInput[]
    OR?: projecttypeWhereInput[]
    NOT?: projecttypeWhereInput | projecttypeWhereInput[]
    projecttypename?: StringFilter<"projecttype"> | string
    description?: StringNullableFilter<"projecttype"> | string | null
    created?: DateTimeNullableFilter<"projecttype"> | Date | string | null
    modified?: DateTimeNullableFilter<"projecttype"> | Date | string | null
    projectgroup?: ProjectgroupListRelationFilter
  }, "projecttypeid">

  export type projecttypeOrderByWithAggregationInput = {
    projecttypeid?: SortOrder
    projecttypename?: SortOrder
    description?: SortOrderInput | SortOrder
    created?: SortOrderInput | SortOrder
    modified?: SortOrderInput | SortOrder
    _count?: projecttypeCountOrderByAggregateInput
    _avg?: projecttypeAvgOrderByAggregateInput
    _max?: projecttypeMaxOrderByAggregateInput
    _min?: projecttypeMinOrderByAggregateInput
    _sum?: projecttypeSumOrderByAggregateInput
  }

  export type projecttypeScalarWhereWithAggregatesInput = {
    AND?: projecttypeScalarWhereWithAggregatesInput | projecttypeScalarWhereWithAggregatesInput[]
    OR?: projecttypeScalarWhereWithAggregatesInput[]
    NOT?: projecttypeScalarWhereWithAggregatesInput | projecttypeScalarWhereWithAggregatesInput[]
    projecttypeid?: IntWithAggregatesFilter<"projecttype"> | number
    projecttypename?: StringWithAggregatesFilter<"projecttype"> | string
    description?: StringNullableWithAggregatesFilter<"projecttype"> | string | null
    created?: DateTimeNullableWithAggregatesFilter<"projecttype"> | Date | string | null
    modified?: DateTimeNullableWithAggregatesFilter<"projecttype"> | Date | string | null
  }

  export type staffWhereInput = {
    AND?: staffWhereInput | staffWhereInput[]
    OR?: staffWhereInput[]
    NOT?: staffWhereInput | staffWhereInput[]
    staffid?: IntFilter<"staff"> | number
    staffname?: StringFilter<"staff"> | string
    phone?: StringNullableFilter<"staff"> | string | null
    email?: StringFilter<"staff"> | string
    password?: StringFilter<"staff"> | string
    role?: StringNullableFilter<"staff"> | string | null
    description?: StringNullableFilter<"staff"> | string | null
    created?: DateTimeNullableFilter<"staff"> | Date | string | null
    modified?: DateTimeNullableFilter<"staff"> | Date | string | null
    registeredby?: IntNullableFilter<"staff"> | number | null
    profileimage?: StringNullableFilter<"staff"> | string | null
    projectgroup_projectgroup_convenerstaffidTostaff?: ProjectgroupListRelationFilter
    projectgroup_projectgroup_expertstaffidTostaff?: ProjectgroupListRelationFilter
    projectmeeting?: ProjectmeetingListRelationFilter
    staff?: XOR<StaffNullableScalarRelationFilter, staffWhereInput> | null
    other_staff?: StaffListRelationFilter
    student?: StudentListRelationFilter
    grouprequest?: GrouprequestListRelationFilter
    grade?: GradeListRelationFilter
  }

  export type staffOrderByWithRelationInput = {
    staffid?: SortOrder
    staffname?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created?: SortOrderInput | SortOrder
    modified?: SortOrderInput | SortOrder
    registeredby?: SortOrderInput | SortOrder
    profileimage?: SortOrderInput | SortOrder
    projectgroup_projectgroup_convenerstaffidTostaff?: projectgroupOrderByRelationAggregateInput
    projectgroup_projectgroup_expertstaffidTostaff?: projectgroupOrderByRelationAggregateInput
    projectmeeting?: projectmeetingOrderByRelationAggregateInput
    staff?: staffOrderByWithRelationInput
    other_staff?: staffOrderByRelationAggregateInput
    student?: studentOrderByRelationAggregateInput
    grouprequest?: grouprequestOrderByRelationAggregateInput
    grade?: gradeOrderByRelationAggregateInput
  }

  export type staffWhereUniqueInput = Prisma.AtLeast<{
    staffid?: number
    email?: string
    AND?: staffWhereInput | staffWhereInput[]
    OR?: staffWhereInput[]
    NOT?: staffWhereInput | staffWhereInput[]
    staffname?: StringFilter<"staff"> | string
    phone?: StringNullableFilter<"staff"> | string | null
    password?: StringFilter<"staff"> | string
    role?: StringNullableFilter<"staff"> | string | null
    description?: StringNullableFilter<"staff"> | string | null
    created?: DateTimeNullableFilter<"staff"> | Date | string | null
    modified?: DateTimeNullableFilter<"staff"> | Date | string | null
    registeredby?: IntNullableFilter<"staff"> | number | null
    profileimage?: StringNullableFilter<"staff"> | string | null
    projectgroup_projectgroup_convenerstaffidTostaff?: ProjectgroupListRelationFilter
    projectgroup_projectgroup_expertstaffidTostaff?: ProjectgroupListRelationFilter
    projectmeeting?: ProjectmeetingListRelationFilter
    staff?: XOR<StaffNullableScalarRelationFilter, staffWhereInput> | null
    other_staff?: StaffListRelationFilter
    student?: StudentListRelationFilter
    grouprequest?: GrouprequestListRelationFilter
    grade?: GradeListRelationFilter
  }, "staffid" | "email">

  export type staffOrderByWithAggregationInput = {
    staffid?: SortOrder
    staffname?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    created?: SortOrderInput | SortOrder
    modified?: SortOrderInput | SortOrder
    registeredby?: SortOrderInput | SortOrder
    profileimage?: SortOrderInput | SortOrder
    _count?: staffCountOrderByAggregateInput
    _avg?: staffAvgOrderByAggregateInput
    _max?: staffMaxOrderByAggregateInput
    _min?: staffMinOrderByAggregateInput
    _sum?: staffSumOrderByAggregateInput
  }

  export type staffScalarWhereWithAggregatesInput = {
    AND?: staffScalarWhereWithAggregatesInput | staffScalarWhereWithAggregatesInput[]
    OR?: staffScalarWhereWithAggregatesInput[]
    NOT?: staffScalarWhereWithAggregatesInput | staffScalarWhereWithAggregatesInput[]
    staffid?: IntWithAggregatesFilter<"staff"> | number
    staffname?: StringWithAggregatesFilter<"staff"> | string
    phone?: StringNullableWithAggregatesFilter<"staff"> | string | null
    email?: StringWithAggregatesFilter<"staff"> | string
    password?: StringWithAggregatesFilter<"staff"> | string
    role?: StringNullableWithAggregatesFilter<"staff"> | string | null
    description?: StringNullableWithAggregatesFilter<"staff"> | string | null
    created?: DateTimeNullableWithAggregatesFilter<"staff"> | Date | string | null
    modified?: DateTimeNullableWithAggregatesFilter<"staff"> | Date | string | null
    registeredby?: IntNullableWithAggregatesFilter<"staff"> | number | null
    profileimage?: StringNullableWithAggregatesFilter<"staff"> | string | null
  }

  export type studentWhereInput = {
    AND?: studentWhereInput | studentWhereInput[]
    OR?: studentWhereInput[]
    NOT?: studentWhereInput | studentWhereInput[]
    studentid?: IntFilter<"student"> | number
    studentname?: StringFilter<"student"> | string
    phone?: StringNullableFilter<"student"> | string | null
    email?: StringFilter<"student"> | string
    password?: StringFilter<"student"> | string
    description?: StringNullableFilter<"student"> | string | null
    created?: DateTimeNullableFilter<"student"> | Date | string | null
    modified?: DateTimeNullableFilter<"student"> | Date | string | null
    registeredby?: IntNullableFilter<"student"> | number | null
    profileimage?: StringNullableFilter<"student"> | string | null
    projectgroupmember?: ProjectgroupmemberListRelationFilter
    projectmeetingattendance?: ProjectmeetingattendanceListRelationFilter
    staff?: XOR<StaffNullableScalarRelationFilter, staffWhereInput> | null
    grouprequest?: GrouprequestListRelationFilter
  }

  export type studentOrderByWithRelationInput = {
    studentid?: SortOrder
    studentname?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    description?: SortOrderInput | SortOrder
    created?: SortOrderInput | SortOrder
    modified?: SortOrderInput | SortOrder
    registeredby?: SortOrderInput | SortOrder
    profileimage?: SortOrderInput | SortOrder
    projectgroupmember?: projectgroupmemberOrderByRelationAggregateInput
    projectmeetingattendance?: projectmeetingattendanceOrderByRelationAggregateInput
    staff?: staffOrderByWithRelationInput
    grouprequest?: grouprequestOrderByRelationAggregateInput
  }

  export type studentWhereUniqueInput = Prisma.AtLeast<{
    studentid?: number
    email?: string
    AND?: studentWhereInput | studentWhereInput[]
    OR?: studentWhereInput[]
    NOT?: studentWhereInput | studentWhereInput[]
    studentname?: StringFilter<"student"> | string
    phone?: StringNullableFilter<"student"> | string | null
    password?: StringFilter<"student"> | string
    description?: StringNullableFilter<"student"> | string | null
    created?: DateTimeNullableFilter<"student"> | Date | string | null
    modified?: DateTimeNullableFilter<"student"> | Date | string | null
    registeredby?: IntNullableFilter<"student"> | number | null
    profileimage?: StringNullableFilter<"student"> | string | null
    projectgroupmember?: ProjectgroupmemberListRelationFilter
    projectmeetingattendance?: ProjectmeetingattendanceListRelationFilter
    staff?: XOR<StaffNullableScalarRelationFilter, staffWhereInput> | null
    grouprequest?: GrouprequestListRelationFilter
  }, "studentid" | "email">

  export type studentOrderByWithAggregationInput = {
    studentid?: SortOrder
    studentname?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    description?: SortOrderInput | SortOrder
    created?: SortOrderInput | SortOrder
    modified?: SortOrderInput | SortOrder
    registeredby?: SortOrderInput | SortOrder
    profileimage?: SortOrderInput | SortOrder
    _count?: studentCountOrderByAggregateInput
    _avg?: studentAvgOrderByAggregateInput
    _max?: studentMaxOrderByAggregateInput
    _min?: studentMinOrderByAggregateInput
    _sum?: studentSumOrderByAggregateInput
  }

  export type studentScalarWhereWithAggregatesInput = {
    AND?: studentScalarWhereWithAggregatesInput | studentScalarWhereWithAggregatesInput[]
    OR?: studentScalarWhereWithAggregatesInput[]
    NOT?: studentScalarWhereWithAggregatesInput | studentScalarWhereWithAggregatesInput[]
    studentid?: IntWithAggregatesFilter<"student"> | number
    studentname?: StringWithAggregatesFilter<"student"> | string
    phone?: StringNullableWithAggregatesFilter<"student"> | string | null
    email?: StringWithAggregatesFilter<"student"> | string
    password?: StringWithAggregatesFilter<"student"> | string
    description?: StringNullableWithAggregatesFilter<"student"> | string | null
    created?: DateTimeNullableWithAggregatesFilter<"student"> | Date | string | null
    modified?: DateTimeNullableWithAggregatesFilter<"student"> | Date | string | null
    registeredby?: IntNullableWithAggregatesFilter<"student"> | number | null
    profileimage?: StringNullableWithAggregatesFilter<"student"> | string | null
  }

  export type activitylogWhereInput = {
    AND?: activitylogWhereInput | activitylogWhereInput[]
    OR?: activitylogWhereInput[]
    NOT?: activitylogWhereInput | activitylogWhereInput[]
    activityid?: IntFilter<"activitylog"> | number
    type?: StringFilter<"activitylog"> | string
    detail?: StringFilter<"activitylog"> | string
    userid?: IntNullableFilter<"activitylog"> | number | null
    userrole?: StringNullableFilter<"activitylog"> | string | null
    created?: DateTimeFilter<"activitylog"> | Date | string
  }

  export type activitylogOrderByWithRelationInput = {
    activityid?: SortOrder
    type?: SortOrder
    detail?: SortOrder
    userid?: SortOrderInput | SortOrder
    userrole?: SortOrderInput | SortOrder
    created?: SortOrder
  }

  export type activitylogWhereUniqueInput = Prisma.AtLeast<{
    activityid?: number
    AND?: activitylogWhereInput | activitylogWhereInput[]
    OR?: activitylogWhereInput[]
    NOT?: activitylogWhereInput | activitylogWhereInput[]
    type?: StringFilter<"activitylog"> | string
    detail?: StringFilter<"activitylog"> | string
    userid?: IntNullableFilter<"activitylog"> | number | null
    userrole?: StringNullableFilter<"activitylog"> | string | null
    created?: DateTimeFilter<"activitylog"> | Date | string
  }, "activityid">

  export type activitylogOrderByWithAggregationInput = {
    activityid?: SortOrder
    type?: SortOrder
    detail?: SortOrder
    userid?: SortOrderInput | SortOrder
    userrole?: SortOrderInput | SortOrder
    created?: SortOrder
    _count?: activitylogCountOrderByAggregateInput
    _avg?: activitylogAvgOrderByAggregateInput
    _max?: activitylogMaxOrderByAggregateInput
    _min?: activitylogMinOrderByAggregateInput
    _sum?: activitylogSumOrderByAggregateInput
  }

  export type activitylogScalarWhereWithAggregatesInput = {
    AND?: activitylogScalarWhereWithAggregatesInput | activitylogScalarWhereWithAggregatesInput[]
    OR?: activitylogScalarWhereWithAggregatesInput[]
    NOT?: activitylogScalarWhereWithAggregatesInput | activitylogScalarWhereWithAggregatesInput[]
    activityid?: IntWithAggregatesFilter<"activitylog"> | number
    type?: StringWithAggregatesFilter<"activitylog"> | string
    detail?: StringWithAggregatesFilter<"activitylog"> | string
    userid?: IntNullableWithAggregatesFilter<"activitylog"> | number | null
    userrole?: StringNullableWithAggregatesFilter<"activitylog"> | string | null
    created?: DateTimeWithAggregatesFilter<"activitylog"> | Date | string
  }

  export type gradeWhereInput = {
    AND?: gradeWhereInput | gradeWhereInput[]
    OR?: gradeWhereInput[]
    NOT?: gradeWhereInput | gradeWhereInput[]
    gradeid?: IntFilter<"grade"> | number
    projectgroupid?: IntFilter<"grade"> | number
    facultyid?: IntFilter<"grade"> | number
    component?: StringFilter<"grade"> | string
    marks?: FloatFilter<"grade"> | number
    maxmarks?: FloatFilter<"grade"> | number
    feedback?: StringNullableFilter<"grade"> | string | null
    gradedat?: DateTimeFilter<"grade"> | Date | string
    created?: DateTimeFilter<"grade"> | Date | string
    modified?: DateTimeFilter<"grade"> | Date | string
    projectgroup?: XOR<ProjectgroupScalarRelationFilter, projectgroupWhereInput>
    staff?: XOR<StaffScalarRelationFilter, staffWhereInput>
  }

  export type gradeOrderByWithRelationInput = {
    gradeid?: SortOrder
    projectgroupid?: SortOrder
    facultyid?: SortOrder
    component?: SortOrder
    marks?: SortOrder
    maxmarks?: SortOrder
    feedback?: SortOrderInput | SortOrder
    gradedat?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    projectgroup?: projectgroupOrderByWithRelationInput
    staff?: staffOrderByWithRelationInput
  }

  export type gradeWhereUniqueInput = Prisma.AtLeast<{
    gradeid?: number
    projectgroupid_component?: gradeProjectgroupidComponentCompoundUniqueInput
    AND?: gradeWhereInput | gradeWhereInput[]
    OR?: gradeWhereInput[]
    NOT?: gradeWhereInput | gradeWhereInput[]
    projectgroupid?: IntFilter<"grade"> | number
    facultyid?: IntFilter<"grade"> | number
    component?: StringFilter<"grade"> | string
    marks?: FloatFilter<"grade"> | number
    maxmarks?: FloatFilter<"grade"> | number
    feedback?: StringNullableFilter<"grade"> | string | null
    gradedat?: DateTimeFilter<"grade"> | Date | string
    created?: DateTimeFilter<"grade"> | Date | string
    modified?: DateTimeFilter<"grade"> | Date | string
    projectgroup?: XOR<ProjectgroupScalarRelationFilter, projectgroupWhereInput>
    staff?: XOR<StaffScalarRelationFilter, staffWhereInput>
  }, "gradeid" | "projectgroupid_component">

  export type gradeOrderByWithAggregationInput = {
    gradeid?: SortOrder
    projectgroupid?: SortOrder
    facultyid?: SortOrder
    component?: SortOrder
    marks?: SortOrder
    maxmarks?: SortOrder
    feedback?: SortOrderInput | SortOrder
    gradedat?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    _count?: gradeCountOrderByAggregateInput
    _avg?: gradeAvgOrderByAggregateInput
    _max?: gradeMaxOrderByAggregateInput
    _min?: gradeMinOrderByAggregateInput
    _sum?: gradeSumOrderByAggregateInput
  }

  export type gradeScalarWhereWithAggregatesInput = {
    AND?: gradeScalarWhereWithAggregatesInput | gradeScalarWhereWithAggregatesInput[]
    OR?: gradeScalarWhereWithAggregatesInput[]
    NOT?: gradeScalarWhereWithAggregatesInput | gradeScalarWhereWithAggregatesInput[]
    gradeid?: IntWithAggregatesFilter<"grade"> | number
    projectgroupid?: IntWithAggregatesFilter<"grade"> | number
    facultyid?: IntWithAggregatesFilter<"grade"> | number
    component?: StringWithAggregatesFilter<"grade"> | string
    marks?: FloatWithAggregatesFilter<"grade"> | number
    maxmarks?: FloatWithAggregatesFilter<"grade"> | number
    feedback?: StringNullableWithAggregatesFilter<"grade"> | string | null
    gradedat?: DateTimeWithAggregatesFilter<"grade"> | Date | string
    created?: DateTimeWithAggregatesFilter<"grade"> | Date | string
    modified?: DateTimeWithAggregatesFilter<"grade"> | Date | string
  }

  export type projectgroupCreateInput = {
    projectgroupname?: string | null
    projecttitle?: string | null
    projectarea?: string | null
    projectdescription?: string | null
    averagecpi?: number | null
    description?: string | null
    status?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    staff_projectgroup_convenerstaffidTostaff?: staffCreateNestedOneWithoutProjectgroup_projectgroup_convenerstaffidTostaffInput
    staff_projectgroup_expertstaffidTostaff?: staffCreateNestedOneWithoutProjectgroup_projectgroup_expertstaffidTostaffInput
    projecttype?: projecttypeCreateNestedOneWithoutProjectgroupInput
    projectgroupmember?: projectgroupmemberCreateNestedManyWithoutProjectgroupInput
    projectmeeting?: projectmeetingCreateNestedManyWithoutProjectgroupInput
    grade?: gradeCreateNestedManyWithoutProjectgroupInput
  }

  export type projectgroupUncheckedCreateInput = {
    projectgroupid?: number
    projecttypeid?: number | null
    projectgroupname?: string | null
    projecttitle?: string | null
    projectarea?: string | null
    projectdescription?: string | null
    averagecpi?: number | null
    description?: string | null
    convenerstaffid?: number | null
    expertstaffid?: number | null
    status?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    projectgroupmember?: projectgroupmemberUncheckedCreateNestedManyWithoutProjectgroupInput
    projectmeeting?: projectmeetingUncheckedCreateNestedManyWithoutProjectgroupInput
    grade?: gradeUncheckedCreateNestedManyWithoutProjectgroupInput
  }

  export type projectgroupUpdateInput = {
    projectgroupname?: NullableStringFieldUpdateOperationsInput | string | null
    projecttitle?: NullableStringFieldUpdateOperationsInput | string | null
    projectarea?: NullableStringFieldUpdateOperationsInput | string | null
    projectdescription?: NullableStringFieldUpdateOperationsInput | string | null
    averagecpi?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staff_projectgroup_convenerstaffidTostaff?: staffUpdateOneWithoutProjectgroup_projectgroup_convenerstaffidTostaffNestedInput
    staff_projectgroup_expertstaffidTostaff?: staffUpdateOneWithoutProjectgroup_projectgroup_expertstaffidTostaffNestedInput
    projecttype?: projecttypeUpdateOneWithoutProjectgroupNestedInput
    projectgroupmember?: projectgroupmemberUpdateManyWithoutProjectgroupNestedInput
    projectmeeting?: projectmeetingUpdateManyWithoutProjectgroupNestedInput
    grade?: gradeUpdateManyWithoutProjectgroupNestedInput
  }

  export type projectgroupUncheckedUpdateInput = {
    projectgroupid?: IntFieldUpdateOperationsInput | number
    projecttypeid?: NullableIntFieldUpdateOperationsInput | number | null
    projectgroupname?: NullableStringFieldUpdateOperationsInput | string | null
    projecttitle?: NullableStringFieldUpdateOperationsInput | string | null
    projectarea?: NullableStringFieldUpdateOperationsInput | string | null
    projectdescription?: NullableStringFieldUpdateOperationsInput | string | null
    averagecpi?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    convenerstaffid?: NullableIntFieldUpdateOperationsInput | number | null
    expertstaffid?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projectgroupmember?: projectgroupmemberUncheckedUpdateManyWithoutProjectgroupNestedInput
    projectmeeting?: projectmeetingUncheckedUpdateManyWithoutProjectgroupNestedInput
    grade?: gradeUncheckedUpdateManyWithoutProjectgroupNestedInput
  }

  export type projectgroupCreateManyInput = {
    projectgroupid?: number
    projecttypeid?: number | null
    projectgroupname?: string | null
    projecttitle?: string | null
    projectarea?: string | null
    projectdescription?: string | null
    averagecpi?: number | null
    description?: string | null
    convenerstaffid?: number | null
    expertstaffid?: number | null
    status?: string | null
    created?: Date | string | null
    modified?: Date | string | null
  }

  export type projectgroupUpdateManyMutationInput = {
    projectgroupname?: NullableStringFieldUpdateOperationsInput | string | null
    projecttitle?: NullableStringFieldUpdateOperationsInput | string | null
    projectarea?: NullableStringFieldUpdateOperationsInput | string | null
    projectdescription?: NullableStringFieldUpdateOperationsInput | string | null
    averagecpi?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectgroupUncheckedUpdateManyInput = {
    projectgroupid?: IntFieldUpdateOperationsInput | number
    projecttypeid?: NullableIntFieldUpdateOperationsInput | number | null
    projectgroupname?: NullableStringFieldUpdateOperationsInput | string | null
    projecttitle?: NullableStringFieldUpdateOperationsInput | string | null
    projectarea?: NullableStringFieldUpdateOperationsInput | string | null
    projectdescription?: NullableStringFieldUpdateOperationsInput | string | null
    averagecpi?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    convenerstaffid?: NullableIntFieldUpdateOperationsInput | number | null
    expertstaffid?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type grouprequestCreateInput = {
    groupname: string
    projecttitle: string
    projectarea?: string | null
    projectdescription?: string | null
    technologies?: string | null
    memberdata: string
    status?: string
    rejectionreason?: string | null
    created?: Date | string
    modified?: Date | string
    leader: studentCreateNestedOneWithoutGrouprequestInput
    approver?: staffCreateNestedOneWithoutGrouprequestInput
  }

  export type grouprequestUncheckedCreateInput = {
    requestid?: number
    groupname: string
    projecttitle: string
    projectarea?: string | null
    projectdescription?: string | null
    technologies?: string | null
    leaderid: number
    memberdata: string
    status?: string
    rejectionreason?: string | null
    created?: Date | string
    modified?: Date | string
    approvedby?: number | null
  }

  export type grouprequestUpdateInput = {
    groupname?: StringFieldUpdateOperationsInput | string
    projecttitle?: StringFieldUpdateOperationsInput | string
    projectarea?: NullableStringFieldUpdateOperationsInput | string | null
    projectdescription?: NullableStringFieldUpdateOperationsInput | string | null
    technologies?: NullableStringFieldUpdateOperationsInput | string | null
    memberdata?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionreason?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    leader?: studentUpdateOneRequiredWithoutGrouprequestNestedInput
    approver?: staffUpdateOneWithoutGrouprequestNestedInput
  }

  export type grouprequestUncheckedUpdateInput = {
    requestid?: IntFieldUpdateOperationsInput | number
    groupname?: StringFieldUpdateOperationsInput | string
    projecttitle?: StringFieldUpdateOperationsInput | string
    projectarea?: NullableStringFieldUpdateOperationsInput | string | null
    projectdescription?: NullableStringFieldUpdateOperationsInput | string | null
    technologies?: NullableStringFieldUpdateOperationsInput | string | null
    leaderid?: IntFieldUpdateOperationsInput | number
    memberdata?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionreason?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedby?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type grouprequestCreateManyInput = {
    requestid?: number
    groupname: string
    projecttitle: string
    projectarea?: string | null
    projectdescription?: string | null
    technologies?: string | null
    leaderid: number
    memberdata: string
    status?: string
    rejectionreason?: string | null
    created?: Date | string
    modified?: Date | string
    approvedby?: number | null
  }

  export type grouprequestUpdateManyMutationInput = {
    groupname?: StringFieldUpdateOperationsInput | string
    projecttitle?: StringFieldUpdateOperationsInput | string
    projectarea?: NullableStringFieldUpdateOperationsInput | string | null
    projectdescription?: NullableStringFieldUpdateOperationsInput | string | null
    technologies?: NullableStringFieldUpdateOperationsInput | string | null
    memberdata?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionreason?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type grouprequestUncheckedUpdateManyInput = {
    requestid?: IntFieldUpdateOperationsInput | number
    groupname?: StringFieldUpdateOperationsInput | string
    projecttitle?: StringFieldUpdateOperationsInput | string
    projectarea?: NullableStringFieldUpdateOperationsInput | string | null
    projectdescription?: NullableStringFieldUpdateOperationsInput | string | null
    technologies?: NullableStringFieldUpdateOperationsInput | string | null
    leaderid?: IntFieldUpdateOperationsInput | number
    memberdata?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionreason?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedby?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type projectgroupmemberCreateInput = {
    isgroupleader?: boolean | null
    studentcgpa?: number | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    projectgroup?: projectgroupCreateNestedOneWithoutProjectgroupmemberInput
    student?: studentCreateNestedOneWithoutProjectgroupmemberInput
  }

  export type projectgroupmemberUncheckedCreateInput = {
    projectgroupmemberid?: number
    isgroupleader?: boolean | null
    studentcgpa?: number | null
    projectgroupid?: number | null
    studentid?: number | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
  }

  export type projectgroupmemberUpdateInput = {
    isgroupleader?: NullableBoolFieldUpdateOperationsInput | boolean | null
    studentcgpa?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projectgroup?: projectgroupUpdateOneWithoutProjectgroupmemberNestedInput
    student?: studentUpdateOneWithoutProjectgroupmemberNestedInput
  }

  export type projectgroupmemberUncheckedUpdateInput = {
    projectgroupmemberid?: IntFieldUpdateOperationsInput | number
    isgroupleader?: NullableBoolFieldUpdateOperationsInput | boolean | null
    studentcgpa?: NullableFloatFieldUpdateOperationsInput | number | null
    projectgroupid?: NullableIntFieldUpdateOperationsInput | number | null
    studentid?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectgroupmemberCreateManyInput = {
    projectgroupmemberid?: number
    isgroupleader?: boolean | null
    studentcgpa?: number | null
    projectgroupid?: number | null
    studentid?: number | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
  }

  export type projectgroupmemberUpdateManyMutationInput = {
    isgroupleader?: NullableBoolFieldUpdateOperationsInput | boolean | null
    studentcgpa?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectgroupmemberUncheckedUpdateManyInput = {
    projectgroupmemberid?: IntFieldUpdateOperationsInput | number
    isgroupleader?: NullableBoolFieldUpdateOperationsInput | boolean | null
    studentcgpa?: NullableFloatFieldUpdateOperationsInput | number | null
    projectgroupid?: NullableIntFieldUpdateOperationsInput | number | null
    studentid?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectmeetingCreateInput = {
    meetingdatetime?: Date | string | null
    meetingpurpose?: string | null
    meetinglocation?: string | null
    meetingnotes?: string | null
    meetingstatus?: string | null
    meetingstatusdescription?: string | null
    meetingstatusdatetime?: Date | string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    staff?: staffCreateNestedOneWithoutProjectmeetingInput
    projectgroup?: projectgroupCreateNestedOneWithoutProjectmeetingInput
    projectmeetingattendance?: projectmeetingattendanceCreateNestedManyWithoutProjectmeetingInput
  }

  export type projectmeetingUncheckedCreateInput = {
    projectmeetingid?: number
    projectgroupid?: number | null
    guidestaffid?: number | null
    meetingdatetime?: Date | string | null
    meetingpurpose?: string | null
    meetinglocation?: string | null
    meetingnotes?: string | null
    meetingstatus?: string | null
    meetingstatusdescription?: string | null
    meetingstatusdatetime?: Date | string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    projectmeetingattendance?: projectmeetingattendanceUncheckedCreateNestedManyWithoutProjectmeetingInput
  }

  export type projectmeetingUpdateInput = {
    meetingdatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetingpurpose?: NullableStringFieldUpdateOperationsInput | string | null
    meetinglocation?: NullableStringFieldUpdateOperationsInput | string | null
    meetingnotes?: NullableStringFieldUpdateOperationsInput | string | null
    meetingstatus?: NullableStringFieldUpdateOperationsInput | string | null
    meetingstatusdescription?: NullableStringFieldUpdateOperationsInput | string | null
    meetingstatusdatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staff?: staffUpdateOneWithoutProjectmeetingNestedInput
    projectgroup?: projectgroupUpdateOneWithoutProjectmeetingNestedInput
    projectmeetingattendance?: projectmeetingattendanceUpdateManyWithoutProjectmeetingNestedInput
  }

  export type projectmeetingUncheckedUpdateInput = {
    projectmeetingid?: IntFieldUpdateOperationsInput | number
    projectgroupid?: NullableIntFieldUpdateOperationsInput | number | null
    guidestaffid?: NullableIntFieldUpdateOperationsInput | number | null
    meetingdatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetingpurpose?: NullableStringFieldUpdateOperationsInput | string | null
    meetinglocation?: NullableStringFieldUpdateOperationsInput | string | null
    meetingnotes?: NullableStringFieldUpdateOperationsInput | string | null
    meetingstatus?: NullableStringFieldUpdateOperationsInput | string | null
    meetingstatusdescription?: NullableStringFieldUpdateOperationsInput | string | null
    meetingstatusdatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projectmeetingattendance?: projectmeetingattendanceUncheckedUpdateManyWithoutProjectmeetingNestedInput
  }

  export type projectmeetingCreateManyInput = {
    projectmeetingid?: number
    projectgroupid?: number | null
    guidestaffid?: number | null
    meetingdatetime?: Date | string | null
    meetingpurpose?: string | null
    meetinglocation?: string | null
    meetingnotes?: string | null
    meetingstatus?: string | null
    meetingstatusdescription?: string | null
    meetingstatusdatetime?: Date | string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
  }

  export type projectmeetingUpdateManyMutationInput = {
    meetingdatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetingpurpose?: NullableStringFieldUpdateOperationsInput | string | null
    meetinglocation?: NullableStringFieldUpdateOperationsInput | string | null
    meetingnotes?: NullableStringFieldUpdateOperationsInput | string | null
    meetingstatus?: NullableStringFieldUpdateOperationsInput | string | null
    meetingstatusdescription?: NullableStringFieldUpdateOperationsInput | string | null
    meetingstatusdatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectmeetingUncheckedUpdateManyInput = {
    projectmeetingid?: IntFieldUpdateOperationsInput | number
    projectgroupid?: NullableIntFieldUpdateOperationsInput | number | null
    guidestaffid?: NullableIntFieldUpdateOperationsInput | number | null
    meetingdatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetingpurpose?: NullableStringFieldUpdateOperationsInput | string | null
    meetinglocation?: NullableStringFieldUpdateOperationsInput | string | null
    meetingnotes?: NullableStringFieldUpdateOperationsInput | string | null
    meetingstatus?: NullableStringFieldUpdateOperationsInput | string | null
    meetingstatusdescription?: NullableStringFieldUpdateOperationsInput | string | null
    meetingstatusdatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectmeetingattendanceCreateInput = {
    ispresent?: boolean | null
    attendanceremarks?: string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    projectmeeting?: projectmeetingCreateNestedOneWithoutProjectmeetingattendanceInput
    student?: studentCreateNestedOneWithoutProjectmeetingattendanceInput
  }

  export type projectmeetingattendanceUncheckedCreateInput = {
    projectmeetingattendanceid?: number
    studentid?: number | null
    projectmeetingid?: number | null
    ispresent?: boolean | null
    attendanceremarks?: string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
  }

  export type projectmeetingattendanceUpdateInput = {
    ispresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    attendanceremarks?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projectmeeting?: projectmeetingUpdateOneWithoutProjectmeetingattendanceNestedInput
    student?: studentUpdateOneWithoutProjectmeetingattendanceNestedInput
  }

  export type projectmeetingattendanceUncheckedUpdateInput = {
    projectmeetingattendanceid?: IntFieldUpdateOperationsInput | number
    studentid?: NullableIntFieldUpdateOperationsInput | number | null
    projectmeetingid?: NullableIntFieldUpdateOperationsInput | number | null
    ispresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    attendanceremarks?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectmeetingattendanceCreateManyInput = {
    projectmeetingattendanceid?: number
    studentid?: number | null
    projectmeetingid?: number | null
    ispresent?: boolean | null
    attendanceremarks?: string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
  }

  export type projectmeetingattendanceUpdateManyMutationInput = {
    ispresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    attendanceremarks?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectmeetingattendanceUncheckedUpdateManyInput = {
    projectmeetingattendanceid?: IntFieldUpdateOperationsInput | number
    studentid?: NullableIntFieldUpdateOperationsInput | number | null
    projectmeetingid?: NullableIntFieldUpdateOperationsInput | number | null
    ispresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    attendanceremarks?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projecttypeCreateInput = {
    projecttypename: string
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    projectgroup?: projectgroupCreateNestedManyWithoutProjecttypeInput
  }

  export type projecttypeUncheckedCreateInput = {
    projecttypeid?: number
    projecttypename: string
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    projectgroup?: projectgroupUncheckedCreateNestedManyWithoutProjecttypeInput
  }

  export type projecttypeUpdateInput = {
    projecttypename?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projectgroup?: projectgroupUpdateManyWithoutProjecttypeNestedInput
  }

  export type projecttypeUncheckedUpdateInput = {
    projecttypeid?: IntFieldUpdateOperationsInput | number
    projecttypename?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projectgroup?: projectgroupUncheckedUpdateManyWithoutProjecttypeNestedInput
  }

  export type projecttypeCreateManyInput = {
    projecttypeid?: number
    projecttypename: string
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
  }

  export type projecttypeUpdateManyMutationInput = {
    projecttypename?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projecttypeUncheckedUpdateManyInput = {
    projecttypeid?: IntFieldUpdateOperationsInput | number
    projecttypename?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type staffCreateInput = {
    staffname: string
    phone?: string | null
    email: string
    password: string
    role?: string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    profileimage?: string | null
    projectgroup_projectgroup_convenerstaffidTostaff?: projectgroupCreateNestedManyWithoutStaff_projectgroup_convenerstaffidTostaffInput
    projectgroup_projectgroup_expertstaffidTostaff?: projectgroupCreateNestedManyWithoutStaff_projectgroup_expertstaffidTostaffInput
    projectmeeting?: projectmeetingCreateNestedManyWithoutStaffInput
    staff?: staffCreateNestedOneWithoutOther_staffInput
    other_staff?: staffCreateNestedManyWithoutStaffInput
    student?: studentCreateNestedManyWithoutStaffInput
    grouprequest?: grouprequestCreateNestedManyWithoutApproverInput
    grade?: gradeCreateNestedManyWithoutStaffInput
  }

  export type staffUncheckedCreateInput = {
    staffid?: number
    staffname: string
    phone?: string | null
    email: string
    password: string
    role?: string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    registeredby?: number | null
    profileimage?: string | null
    projectgroup_projectgroup_convenerstaffidTostaff?: projectgroupUncheckedCreateNestedManyWithoutStaff_projectgroup_convenerstaffidTostaffInput
    projectgroup_projectgroup_expertstaffidTostaff?: projectgroupUncheckedCreateNestedManyWithoutStaff_projectgroup_expertstaffidTostaffInput
    projectmeeting?: projectmeetingUncheckedCreateNestedManyWithoutStaffInput
    other_staff?: staffUncheckedCreateNestedManyWithoutStaffInput
    student?: studentUncheckedCreateNestedManyWithoutStaffInput
    grouprequest?: grouprequestUncheckedCreateNestedManyWithoutApproverInput
    grade?: gradeUncheckedCreateNestedManyWithoutStaffInput
  }

  export type staffUpdateInput = {
    staffname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileimage?: NullableStringFieldUpdateOperationsInput | string | null
    projectgroup_projectgroup_convenerstaffidTostaff?: projectgroupUpdateManyWithoutStaff_projectgroup_convenerstaffidTostaffNestedInput
    projectgroup_projectgroup_expertstaffidTostaff?: projectgroupUpdateManyWithoutStaff_projectgroup_expertstaffidTostaffNestedInput
    projectmeeting?: projectmeetingUpdateManyWithoutStaffNestedInput
    staff?: staffUpdateOneWithoutOther_staffNestedInput
    other_staff?: staffUpdateManyWithoutStaffNestedInput
    student?: studentUpdateManyWithoutStaffNestedInput
    grouprequest?: grouprequestUpdateManyWithoutApproverNestedInput
    grade?: gradeUpdateManyWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateInput = {
    staffid?: IntFieldUpdateOperationsInput | number
    staffname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registeredby?: NullableIntFieldUpdateOperationsInput | number | null
    profileimage?: NullableStringFieldUpdateOperationsInput | string | null
    projectgroup_projectgroup_convenerstaffidTostaff?: projectgroupUncheckedUpdateManyWithoutStaff_projectgroup_convenerstaffidTostaffNestedInput
    projectgroup_projectgroup_expertstaffidTostaff?: projectgroupUncheckedUpdateManyWithoutStaff_projectgroup_expertstaffidTostaffNestedInput
    projectmeeting?: projectmeetingUncheckedUpdateManyWithoutStaffNestedInput
    other_staff?: staffUncheckedUpdateManyWithoutStaffNestedInput
    student?: studentUncheckedUpdateManyWithoutStaffNestedInput
    grouprequest?: grouprequestUncheckedUpdateManyWithoutApproverNestedInput
    grade?: gradeUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type staffCreateManyInput = {
    staffid?: number
    staffname: string
    phone?: string | null
    email: string
    password: string
    role?: string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    registeredby?: number | null
    profileimage?: string | null
  }

  export type staffUpdateManyMutationInput = {
    staffname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileimage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type staffUncheckedUpdateManyInput = {
    staffid?: IntFieldUpdateOperationsInput | number
    staffname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registeredby?: NullableIntFieldUpdateOperationsInput | number | null
    profileimage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type studentCreateInput = {
    studentname: string
    phone?: string | null
    email: string
    password: string
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    profileimage?: string | null
    projectgroupmember?: projectgroupmemberCreateNestedManyWithoutStudentInput
    projectmeetingattendance?: projectmeetingattendanceCreateNestedManyWithoutStudentInput
    staff?: staffCreateNestedOneWithoutStudentInput
    grouprequest?: grouprequestCreateNestedManyWithoutLeaderInput
  }

  export type studentUncheckedCreateInput = {
    studentid?: number
    studentname: string
    phone?: string | null
    email: string
    password: string
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    registeredby?: number | null
    profileimage?: string | null
    projectgroupmember?: projectgroupmemberUncheckedCreateNestedManyWithoutStudentInput
    projectmeetingattendance?: projectmeetingattendanceUncheckedCreateNestedManyWithoutStudentInput
    grouprequest?: grouprequestUncheckedCreateNestedManyWithoutLeaderInput
  }

  export type studentUpdateInput = {
    studentname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileimage?: NullableStringFieldUpdateOperationsInput | string | null
    projectgroupmember?: projectgroupmemberUpdateManyWithoutStudentNestedInput
    projectmeetingattendance?: projectmeetingattendanceUpdateManyWithoutStudentNestedInput
    staff?: staffUpdateOneWithoutStudentNestedInput
    grouprequest?: grouprequestUpdateManyWithoutLeaderNestedInput
  }

  export type studentUncheckedUpdateInput = {
    studentid?: IntFieldUpdateOperationsInput | number
    studentname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registeredby?: NullableIntFieldUpdateOperationsInput | number | null
    profileimage?: NullableStringFieldUpdateOperationsInput | string | null
    projectgroupmember?: projectgroupmemberUncheckedUpdateManyWithoutStudentNestedInput
    projectmeetingattendance?: projectmeetingattendanceUncheckedUpdateManyWithoutStudentNestedInput
    grouprequest?: grouprequestUncheckedUpdateManyWithoutLeaderNestedInput
  }

  export type studentCreateManyInput = {
    studentid?: number
    studentname: string
    phone?: string | null
    email: string
    password: string
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    registeredby?: number | null
    profileimage?: string | null
  }

  export type studentUpdateManyMutationInput = {
    studentname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileimage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type studentUncheckedUpdateManyInput = {
    studentid?: IntFieldUpdateOperationsInput | number
    studentname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registeredby?: NullableIntFieldUpdateOperationsInput | number | null
    profileimage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type activitylogCreateInput = {
    type: string
    detail: string
    userid?: number | null
    userrole?: string | null
    created?: Date | string
  }

  export type activitylogUncheckedCreateInput = {
    activityid?: number
    type: string
    detail: string
    userid?: number | null
    userrole?: string | null
    created?: Date | string
  }

  export type activitylogUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    userid?: NullableIntFieldUpdateOperationsInput | number | null
    userrole?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type activitylogUncheckedUpdateInput = {
    activityid?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    userid?: NullableIntFieldUpdateOperationsInput | number | null
    userrole?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type activitylogCreateManyInput = {
    activityid?: number
    type: string
    detail: string
    userid?: number | null
    userrole?: string | null
    created?: Date | string
  }

  export type activitylogUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    userid?: NullableIntFieldUpdateOperationsInput | number | null
    userrole?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type activitylogUncheckedUpdateManyInput = {
    activityid?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    userid?: NullableIntFieldUpdateOperationsInput | number | null
    userrole?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gradeCreateInput = {
    component: string
    marks: number
    maxmarks: number
    feedback?: string | null
    gradedat?: Date | string
    created?: Date | string
    modified?: Date | string
    projectgroup: projectgroupCreateNestedOneWithoutGradeInput
    staff: staffCreateNestedOneWithoutGradeInput
  }

  export type gradeUncheckedCreateInput = {
    gradeid?: number
    projectgroupid: number
    facultyid: number
    component: string
    marks: number
    maxmarks: number
    feedback?: string | null
    gradedat?: Date | string
    created?: Date | string
    modified?: Date | string
  }

  export type gradeUpdateInput = {
    component?: StringFieldUpdateOperationsInput | string
    marks?: FloatFieldUpdateOperationsInput | number
    maxmarks?: FloatFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradedat?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    projectgroup?: projectgroupUpdateOneRequiredWithoutGradeNestedInput
    staff?: staffUpdateOneRequiredWithoutGradeNestedInput
  }

  export type gradeUncheckedUpdateInput = {
    gradeid?: IntFieldUpdateOperationsInput | number
    projectgroupid?: IntFieldUpdateOperationsInput | number
    facultyid?: IntFieldUpdateOperationsInput | number
    component?: StringFieldUpdateOperationsInput | string
    marks?: FloatFieldUpdateOperationsInput | number
    maxmarks?: FloatFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradedat?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gradeCreateManyInput = {
    gradeid?: number
    projectgroupid: number
    facultyid: number
    component: string
    marks: number
    maxmarks: number
    feedback?: string | null
    gradedat?: Date | string
    created?: Date | string
    modified?: Date | string
  }

  export type gradeUpdateManyMutationInput = {
    component?: StringFieldUpdateOperationsInput | string
    marks?: FloatFieldUpdateOperationsInput | number
    maxmarks?: FloatFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradedat?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gradeUncheckedUpdateManyInput = {
    gradeid?: IntFieldUpdateOperationsInput | number
    projectgroupid?: IntFieldUpdateOperationsInput | number
    facultyid?: IntFieldUpdateOperationsInput | number
    component?: StringFieldUpdateOperationsInput | string
    marks?: FloatFieldUpdateOperationsInput | number
    maxmarks?: FloatFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradedat?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StaffNullableScalarRelationFilter = {
    is?: staffWhereInput | null
    isNot?: staffWhereInput | null
  }

  export type ProjecttypeNullableScalarRelationFilter = {
    is?: projecttypeWhereInput | null
    isNot?: projecttypeWhereInput | null
  }

  export type ProjectgroupmemberListRelationFilter = {
    every?: projectgroupmemberWhereInput
    some?: projectgroupmemberWhereInput
    none?: projectgroupmemberWhereInput
  }

  export type ProjectmeetingListRelationFilter = {
    every?: projectmeetingWhereInput
    some?: projectmeetingWhereInput
    none?: projectmeetingWhereInput
  }

  export type GradeListRelationFilter = {
    every?: gradeWhereInput
    some?: gradeWhereInput
    none?: gradeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type projectgroupmemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type projectmeetingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type gradeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type projectgroupCountOrderByAggregateInput = {
    projectgroupid?: SortOrder
    projecttypeid?: SortOrder
    projectgroupname?: SortOrder
    projecttitle?: SortOrder
    projectarea?: SortOrder
    projectdescription?: SortOrder
    averagecpi?: SortOrder
    description?: SortOrder
    convenerstaffid?: SortOrder
    expertstaffid?: SortOrder
    status?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type projectgroupAvgOrderByAggregateInput = {
    projectgroupid?: SortOrder
    projecttypeid?: SortOrder
    averagecpi?: SortOrder
    convenerstaffid?: SortOrder
    expertstaffid?: SortOrder
  }

  export type projectgroupMaxOrderByAggregateInput = {
    projectgroupid?: SortOrder
    projecttypeid?: SortOrder
    projectgroupname?: SortOrder
    projecttitle?: SortOrder
    projectarea?: SortOrder
    projectdescription?: SortOrder
    averagecpi?: SortOrder
    description?: SortOrder
    convenerstaffid?: SortOrder
    expertstaffid?: SortOrder
    status?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type projectgroupMinOrderByAggregateInput = {
    projectgroupid?: SortOrder
    projecttypeid?: SortOrder
    projectgroupname?: SortOrder
    projecttitle?: SortOrder
    projectarea?: SortOrder
    projectdescription?: SortOrder
    averagecpi?: SortOrder
    description?: SortOrder
    convenerstaffid?: SortOrder
    expertstaffid?: SortOrder
    status?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type projectgroupSumOrderByAggregateInput = {
    projectgroupid?: SortOrder
    projecttypeid?: SortOrder
    averagecpi?: SortOrder
    convenerstaffid?: SortOrder
    expertstaffid?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StudentScalarRelationFilter = {
    is?: studentWhereInput
    isNot?: studentWhereInput
  }

  export type grouprequestCountOrderByAggregateInput = {
    requestid?: SortOrder
    groupname?: SortOrder
    projecttitle?: SortOrder
    projectarea?: SortOrder
    projectdescription?: SortOrder
    technologies?: SortOrder
    leaderid?: SortOrder
    memberdata?: SortOrder
    status?: SortOrder
    rejectionreason?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    approvedby?: SortOrder
  }

  export type grouprequestAvgOrderByAggregateInput = {
    requestid?: SortOrder
    leaderid?: SortOrder
    approvedby?: SortOrder
  }

  export type grouprequestMaxOrderByAggregateInput = {
    requestid?: SortOrder
    groupname?: SortOrder
    projecttitle?: SortOrder
    projectarea?: SortOrder
    projectdescription?: SortOrder
    technologies?: SortOrder
    leaderid?: SortOrder
    memberdata?: SortOrder
    status?: SortOrder
    rejectionreason?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    approvedby?: SortOrder
  }

  export type grouprequestMinOrderByAggregateInput = {
    requestid?: SortOrder
    groupname?: SortOrder
    projecttitle?: SortOrder
    projectarea?: SortOrder
    projectdescription?: SortOrder
    technologies?: SortOrder
    leaderid?: SortOrder
    memberdata?: SortOrder
    status?: SortOrder
    rejectionreason?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    approvedby?: SortOrder
  }

  export type grouprequestSumOrderByAggregateInput = {
    requestid?: SortOrder
    leaderid?: SortOrder
    approvedby?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ProjectgroupNullableScalarRelationFilter = {
    is?: projectgroupWhereInput | null
    isNot?: projectgroupWhereInput | null
  }

  export type StudentNullableScalarRelationFilter = {
    is?: studentWhereInput | null
    isNot?: studentWhereInput | null
  }

  export type projectgroupmemberCountOrderByAggregateInput = {
    projectgroupmemberid?: SortOrder
    isgroupleader?: SortOrder
    studentcgpa?: SortOrder
    projectgroupid?: SortOrder
    studentid?: SortOrder
    description?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type projectgroupmemberAvgOrderByAggregateInput = {
    projectgroupmemberid?: SortOrder
    studentcgpa?: SortOrder
    projectgroupid?: SortOrder
    studentid?: SortOrder
  }

  export type projectgroupmemberMaxOrderByAggregateInput = {
    projectgroupmemberid?: SortOrder
    isgroupleader?: SortOrder
    studentcgpa?: SortOrder
    projectgroupid?: SortOrder
    studentid?: SortOrder
    description?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type projectgroupmemberMinOrderByAggregateInput = {
    projectgroupmemberid?: SortOrder
    isgroupleader?: SortOrder
    studentcgpa?: SortOrder
    projectgroupid?: SortOrder
    studentid?: SortOrder
    description?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type projectgroupmemberSumOrderByAggregateInput = {
    projectgroupmemberid?: SortOrder
    studentcgpa?: SortOrder
    projectgroupid?: SortOrder
    studentid?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ProjectmeetingattendanceListRelationFilter = {
    every?: projectmeetingattendanceWhereInput
    some?: projectmeetingattendanceWhereInput
    none?: projectmeetingattendanceWhereInput
  }

  export type projectmeetingattendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type projectmeetingCountOrderByAggregateInput = {
    projectmeetingid?: SortOrder
    projectgroupid?: SortOrder
    guidestaffid?: SortOrder
    meetingdatetime?: SortOrder
    meetingpurpose?: SortOrder
    meetinglocation?: SortOrder
    meetingnotes?: SortOrder
    meetingstatus?: SortOrder
    meetingstatusdescription?: SortOrder
    meetingstatusdatetime?: SortOrder
    description?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type projectmeetingAvgOrderByAggregateInput = {
    projectmeetingid?: SortOrder
    projectgroupid?: SortOrder
    guidestaffid?: SortOrder
  }

  export type projectmeetingMaxOrderByAggregateInput = {
    projectmeetingid?: SortOrder
    projectgroupid?: SortOrder
    guidestaffid?: SortOrder
    meetingdatetime?: SortOrder
    meetingpurpose?: SortOrder
    meetinglocation?: SortOrder
    meetingnotes?: SortOrder
    meetingstatus?: SortOrder
    meetingstatusdescription?: SortOrder
    meetingstatusdatetime?: SortOrder
    description?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type projectmeetingMinOrderByAggregateInput = {
    projectmeetingid?: SortOrder
    projectgroupid?: SortOrder
    guidestaffid?: SortOrder
    meetingdatetime?: SortOrder
    meetingpurpose?: SortOrder
    meetinglocation?: SortOrder
    meetingnotes?: SortOrder
    meetingstatus?: SortOrder
    meetingstatusdescription?: SortOrder
    meetingstatusdatetime?: SortOrder
    description?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type projectmeetingSumOrderByAggregateInput = {
    projectmeetingid?: SortOrder
    projectgroupid?: SortOrder
    guidestaffid?: SortOrder
  }

  export type ProjectmeetingNullableScalarRelationFilter = {
    is?: projectmeetingWhereInput | null
    isNot?: projectmeetingWhereInput | null
  }

  export type projectmeetingattendanceCountOrderByAggregateInput = {
    projectmeetingattendanceid?: SortOrder
    studentid?: SortOrder
    projectmeetingid?: SortOrder
    ispresent?: SortOrder
    attendanceremarks?: SortOrder
    description?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type projectmeetingattendanceAvgOrderByAggregateInput = {
    projectmeetingattendanceid?: SortOrder
    studentid?: SortOrder
    projectmeetingid?: SortOrder
  }

  export type projectmeetingattendanceMaxOrderByAggregateInput = {
    projectmeetingattendanceid?: SortOrder
    studentid?: SortOrder
    projectmeetingid?: SortOrder
    ispresent?: SortOrder
    attendanceremarks?: SortOrder
    description?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type projectmeetingattendanceMinOrderByAggregateInput = {
    projectmeetingattendanceid?: SortOrder
    studentid?: SortOrder
    projectmeetingid?: SortOrder
    ispresent?: SortOrder
    attendanceremarks?: SortOrder
    description?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type projectmeetingattendanceSumOrderByAggregateInput = {
    projectmeetingattendanceid?: SortOrder
    studentid?: SortOrder
    projectmeetingid?: SortOrder
  }

  export type ProjectgroupListRelationFilter = {
    every?: projectgroupWhereInput
    some?: projectgroupWhereInput
    none?: projectgroupWhereInput
  }

  export type projectgroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type projecttypeCountOrderByAggregateInput = {
    projecttypeid?: SortOrder
    projecttypename?: SortOrder
    description?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type projecttypeAvgOrderByAggregateInput = {
    projecttypeid?: SortOrder
  }

  export type projecttypeMaxOrderByAggregateInput = {
    projecttypeid?: SortOrder
    projecttypename?: SortOrder
    description?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type projecttypeMinOrderByAggregateInput = {
    projecttypeid?: SortOrder
    projecttypename?: SortOrder
    description?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type projecttypeSumOrderByAggregateInput = {
    projecttypeid?: SortOrder
  }

  export type StaffListRelationFilter = {
    every?: staffWhereInput
    some?: staffWhereInput
    none?: staffWhereInput
  }

  export type StudentListRelationFilter = {
    every?: studentWhereInput
    some?: studentWhereInput
    none?: studentWhereInput
  }

  export type GrouprequestListRelationFilter = {
    every?: grouprequestWhereInput
    some?: grouprequestWhereInput
    none?: grouprequestWhereInput
  }

  export type staffOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type studentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type grouprequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type staffCountOrderByAggregateInput = {
    staffid?: SortOrder
    staffname?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    description?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    registeredby?: SortOrder
    profileimage?: SortOrder
  }

  export type staffAvgOrderByAggregateInput = {
    staffid?: SortOrder
    registeredby?: SortOrder
  }

  export type staffMaxOrderByAggregateInput = {
    staffid?: SortOrder
    staffname?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    description?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    registeredby?: SortOrder
    profileimage?: SortOrder
  }

  export type staffMinOrderByAggregateInput = {
    staffid?: SortOrder
    staffname?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    description?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    registeredby?: SortOrder
    profileimage?: SortOrder
  }

  export type staffSumOrderByAggregateInput = {
    staffid?: SortOrder
    registeredby?: SortOrder
  }

  export type studentCountOrderByAggregateInput = {
    studentid?: SortOrder
    studentname?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    description?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    registeredby?: SortOrder
    profileimage?: SortOrder
  }

  export type studentAvgOrderByAggregateInput = {
    studentid?: SortOrder
    registeredby?: SortOrder
  }

  export type studentMaxOrderByAggregateInput = {
    studentid?: SortOrder
    studentname?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    description?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    registeredby?: SortOrder
    profileimage?: SortOrder
  }

  export type studentMinOrderByAggregateInput = {
    studentid?: SortOrder
    studentname?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    description?: SortOrder
    created?: SortOrder
    modified?: SortOrder
    registeredby?: SortOrder
    profileimage?: SortOrder
  }

  export type studentSumOrderByAggregateInput = {
    studentid?: SortOrder
    registeredby?: SortOrder
  }

  export type activitylogCountOrderByAggregateInput = {
    activityid?: SortOrder
    type?: SortOrder
    detail?: SortOrder
    userid?: SortOrder
    userrole?: SortOrder
    created?: SortOrder
  }

  export type activitylogAvgOrderByAggregateInput = {
    activityid?: SortOrder
    userid?: SortOrder
  }

  export type activitylogMaxOrderByAggregateInput = {
    activityid?: SortOrder
    type?: SortOrder
    detail?: SortOrder
    userid?: SortOrder
    userrole?: SortOrder
    created?: SortOrder
  }

  export type activitylogMinOrderByAggregateInput = {
    activityid?: SortOrder
    type?: SortOrder
    detail?: SortOrder
    userid?: SortOrder
    userrole?: SortOrder
    created?: SortOrder
  }

  export type activitylogSumOrderByAggregateInput = {
    activityid?: SortOrder
    userid?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProjectgroupScalarRelationFilter = {
    is?: projectgroupWhereInput
    isNot?: projectgroupWhereInput
  }

  export type StaffScalarRelationFilter = {
    is?: staffWhereInput
    isNot?: staffWhereInput
  }

  export type gradeProjectgroupidComponentCompoundUniqueInput = {
    projectgroupid: number
    component: string
  }

  export type gradeCountOrderByAggregateInput = {
    gradeid?: SortOrder
    projectgroupid?: SortOrder
    facultyid?: SortOrder
    component?: SortOrder
    marks?: SortOrder
    maxmarks?: SortOrder
    feedback?: SortOrder
    gradedat?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type gradeAvgOrderByAggregateInput = {
    gradeid?: SortOrder
    projectgroupid?: SortOrder
    facultyid?: SortOrder
    marks?: SortOrder
    maxmarks?: SortOrder
  }

  export type gradeMaxOrderByAggregateInput = {
    gradeid?: SortOrder
    projectgroupid?: SortOrder
    facultyid?: SortOrder
    component?: SortOrder
    marks?: SortOrder
    maxmarks?: SortOrder
    feedback?: SortOrder
    gradedat?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type gradeMinOrderByAggregateInput = {
    gradeid?: SortOrder
    projectgroupid?: SortOrder
    facultyid?: SortOrder
    component?: SortOrder
    marks?: SortOrder
    maxmarks?: SortOrder
    feedback?: SortOrder
    gradedat?: SortOrder
    created?: SortOrder
    modified?: SortOrder
  }

  export type gradeSumOrderByAggregateInput = {
    gradeid?: SortOrder
    projectgroupid?: SortOrder
    facultyid?: SortOrder
    marks?: SortOrder
    maxmarks?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type staffCreateNestedOneWithoutProjectgroup_projectgroup_convenerstaffidTostaffInput = {
    create?: XOR<staffCreateWithoutProjectgroup_projectgroup_convenerstaffidTostaffInput, staffUncheckedCreateWithoutProjectgroup_projectgroup_convenerstaffidTostaffInput>
    connectOrCreate?: staffCreateOrConnectWithoutProjectgroup_projectgroup_convenerstaffidTostaffInput
    connect?: staffWhereUniqueInput
  }

  export type staffCreateNestedOneWithoutProjectgroup_projectgroup_expertstaffidTostaffInput = {
    create?: XOR<staffCreateWithoutProjectgroup_projectgroup_expertstaffidTostaffInput, staffUncheckedCreateWithoutProjectgroup_projectgroup_expertstaffidTostaffInput>
    connectOrCreate?: staffCreateOrConnectWithoutProjectgroup_projectgroup_expertstaffidTostaffInput
    connect?: staffWhereUniqueInput
  }

  export type projecttypeCreateNestedOneWithoutProjectgroupInput = {
    create?: XOR<projecttypeCreateWithoutProjectgroupInput, projecttypeUncheckedCreateWithoutProjectgroupInput>
    connectOrCreate?: projecttypeCreateOrConnectWithoutProjectgroupInput
    connect?: projecttypeWhereUniqueInput
  }

  export type projectgroupmemberCreateNestedManyWithoutProjectgroupInput = {
    create?: XOR<projectgroupmemberCreateWithoutProjectgroupInput, projectgroupmemberUncheckedCreateWithoutProjectgroupInput> | projectgroupmemberCreateWithoutProjectgroupInput[] | projectgroupmemberUncheckedCreateWithoutProjectgroupInput[]
    connectOrCreate?: projectgroupmemberCreateOrConnectWithoutProjectgroupInput | projectgroupmemberCreateOrConnectWithoutProjectgroupInput[]
    createMany?: projectgroupmemberCreateManyProjectgroupInputEnvelope
    connect?: projectgroupmemberWhereUniqueInput | projectgroupmemberWhereUniqueInput[]
  }

  export type projectmeetingCreateNestedManyWithoutProjectgroupInput = {
    create?: XOR<projectmeetingCreateWithoutProjectgroupInput, projectmeetingUncheckedCreateWithoutProjectgroupInput> | projectmeetingCreateWithoutProjectgroupInput[] | projectmeetingUncheckedCreateWithoutProjectgroupInput[]
    connectOrCreate?: projectmeetingCreateOrConnectWithoutProjectgroupInput | projectmeetingCreateOrConnectWithoutProjectgroupInput[]
    createMany?: projectmeetingCreateManyProjectgroupInputEnvelope
    connect?: projectmeetingWhereUniqueInput | projectmeetingWhereUniqueInput[]
  }

  export type gradeCreateNestedManyWithoutProjectgroupInput = {
    create?: XOR<gradeCreateWithoutProjectgroupInput, gradeUncheckedCreateWithoutProjectgroupInput> | gradeCreateWithoutProjectgroupInput[] | gradeUncheckedCreateWithoutProjectgroupInput[]
    connectOrCreate?: gradeCreateOrConnectWithoutProjectgroupInput | gradeCreateOrConnectWithoutProjectgroupInput[]
    createMany?: gradeCreateManyProjectgroupInputEnvelope
    connect?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
  }

  export type projectgroupmemberUncheckedCreateNestedManyWithoutProjectgroupInput = {
    create?: XOR<projectgroupmemberCreateWithoutProjectgroupInput, projectgroupmemberUncheckedCreateWithoutProjectgroupInput> | projectgroupmemberCreateWithoutProjectgroupInput[] | projectgroupmemberUncheckedCreateWithoutProjectgroupInput[]
    connectOrCreate?: projectgroupmemberCreateOrConnectWithoutProjectgroupInput | projectgroupmemberCreateOrConnectWithoutProjectgroupInput[]
    createMany?: projectgroupmemberCreateManyProjectgroupInputEnvelope
    connect?: projectgroupmemberWhereUniqueInput | projectgroupmemberWhereUniqueInput[]
  }

  export type projectmeetingUncheckedCreateNestedManyWithoutProjectgroupInput = {
    create?: XOR<projectmeetingCreateWithoutProjectgroupInput, projectmeetingUncheckedCreateWithoutProjectgroupInput> | projectmeetingCreateWithoutProjectgroupInput[] | projectmeetingUncheckedCreateWithoutProjectgroupInput[]
    connectOrCreate?: projectmeetingCreateOrConnectWithoutProjectgroupInput | projectmeetingCreateOrConnectWithoutProjectgroupInput[]
    createMany?: projectmeetingCreateManyProjectgroupInputEnvelope
    connect?: projectmeetingWhereUniqueInput | projectmeetingWhereUniqueInput[]
  }

  export type gradeUncheckedCreateNestedManyWithoutProjectgroupInput = {
    create?: XOR<gradeCreateWithoutProjectgroupInput, gradeUncheckedCreateWithoutProjectgroupInput> | gradeCreateWithoutProjectgroupInput[] | gradeUncheckedCreateWithoutProjectgroupInput[]
    connectOrCreate?: gradeCreateOrConnectWithoutProjectgroupInput | gradeCreateOrConnectWithoutProjectgroupInput[]
    createMany?: gradeCreateManyProjectgroupInputEnvelope
    connect?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type staffUpdateOneWithoutProjectgroup_projectgroup_convenerstaffidTostaffNestedInput = {
    create?: XOR<staffCreateWithoutProjectgroup_projectgroup_convenerstaffidTostaffInput, staffUncheckedCreateWithoutProjectgroup_projectgroup_convenerstaffidTostaffInput>
    connectOrCreate?: staffCreateOrConnectWithoutProjectgroup_projectgroup_convenerstaffidTostaffInput
    upsert?: staffUpsertWithoutProjectgroup_projectgroup_convenerstaffidTostaffInput
    disconnect?: staffWhereInput | boolean
    delete?: staffWhereInput | boolean
    connect?: staffWhereUniqueInput
    update?: XOR<XOR<staffUpdateToOneWithWhereWithoutProjectgroup_projectgroup_convenerstaffidTostaffInput, staffUpdateWithoutProjectgroup_projectgroup_convenerstaffidTostaffInput>, staffUncheckedUpdateWithoutProjectgroup_projectgroup_convenerstaffidTostaffInput>
  }

  export type staffUpdateOneWithoutProjectgroup_projectgroup_expertstaffidTostaffNestedInput = {
    create?: XOR<staffCreateWithoutProjectgroup_projectgroup_expertstaffidTostaffInput, staffUncheckedCreateWithoutProjectgroup_projectgroup_expertstaffidTostaffInput>
    connectOrCreate?: staffCreateOrConnectWithoutProjectgroup_projectgroup_expertstaffidTostaffInput
    upsert?: staffUpsertWithoutProjectgroup_projectgroup_expertstaffidTostaffInput
    disconnect?: staffWhereInput | boolean
    delete?: staffWhereInput | boolean
    connect?: staffWhereUniqueInput
    update?: XOR<XOR<staffUpdateToOneWithWhereWithoutProjectgroup_projectgroup_expertstaffidTostaffInput, staffUpdateWithoutProjectgroup_projectgroup_expertstaffidTostaffInput>, staffUncheckedUpdateWithoutProjectgroup_projectgroup_expertstaffidTostaffInput>
  }

  export type projecttypeUpdateOneWithoutProjectgroupNestedInput = {
    create?: XOR<projecttypeCreateWithoutProjectgroupInput, projecttypeUncheckedCreateWithoutProjectgroupInput>
    connectOrCreate?: projecttypeCreateOrConnectWithoutProjectgroupInput
    upsert?: projecttypeUpsertWithoutProjectgroupInput
    disconnect?: projecttypeWhereInput | boolean
    delete?: projecttypeWhereInput | boolean
    connect?: projecttypeWhereUniqueInput
    update?: XOR<XOR<projecttypeUpdateToOneWithWhereWithoutProjectgroupInput, projecttypeUpdateWithoutProjectgroupInput>, projecttypeUncheckedUpdateWithoutProjectgroupInput>
  }

  export type projectgroupmemberUpdateManyWithoutProjectgroupNestedInput = {
    create?: XOR<projectgroupmemberCreateWithoutProjectgroupInput, projectgroupmemberUncheckedCreateWithoutProjectgroupInput> | projectgroupmemberCreateWithoutProjectgroupInput[] | projectgroupmemberUncheckedCreateWithoutProjectgroupInput[]
    connectOrCreate?: projectgroupmemberCreateOrConnectWithoutProjectgroupInput | projectgroupmemberCreateOrConnectWithoutProjectgroupInput[]
    upsert?: projectgroupmemberUpsertWithWhereUniqueWithoutProjectgroupInput | projectgroupmemberUpsertWithWhereUniqueWithoutProjectgroupInput[]
    createMany?: projectgroupmemberCreateManyProjectgroupInputEnvelope
    set?: projectgroupmemberWhereUniqueInput | projectgroupmemberWhereUniqueInput[]
    disconnect?: projectgroupmemberWhereUniqueInput | projectgroupmemberWhereUniqueInput[]
    delete?: projectgroupmemberWhereUniqueInput | projectgroupmemberWhereUniqueInput[]
    connect?: projectgroupmemberWhereUniqueInput | projectgroupmemberWhereUniqueInput[]
    update?: projectgroupmemberUpdateWithWhereUniqueWithoutProjectgroupInput | projectgroupmemberUpdateWithWhereUniqueWithoutProjectgroupInput[]
    updateMany?: projectgroupmemberUpdateManyWithWhereWithoutProjectgroupInput | projectgroupmemberUpdateManyWithWhereWithoutProjectgroupInput[]
    deleteMany?: projectgroupmemberScalarWhereInput | projectgroupmemberScalarWhereInput[]
  }

  export type projectmeetingUpdateManyWithoutProjectgroupNestedInput = {
    create?: XOR<projectmeetingCreateWithoutProjectgroupInput, projectmeetingUncheckedCreateWithoutProjectgroupInput> | projectmeetingCreateWithoutProjectgroupInput[] | projectmeetingUncheckedCreateWithoutProjectgroupInput[]
    connectOrCreate?: projectmeetingCreateOrConnectWithoutProjectgroupInput | projectmeetingCreateOrConnectWithoutProjectgroupInput[]
    upsert?: projectmeetingUpsertWithWhereUniqueWithoutProjectgroupInput | projectmeetingUpsertWithWhereUniqueWithoutProjectgroupInput[]
    createMany?: projectmeetingCreateManyProjectgroupInputEnvelope
    set?: projectmeetingWhereUniqueInput | projectmeetingWhereUniqueInput[]
    disconnect?: projectmeetingWhereUniqueInput | projectmeetingWhereUniqueInput[]
    delete?: projectmeetingWhereUniqueInput | projectmeetingWhereUniqueInput[]
    connect?: projectmeetingWhereUniqueInput | projectmeetingWhereUniqueInput[]
    update?: projectmeetingUpdateWithWhereUniqueWithoutProjectgroupInput | projectmeetingUpdateWithWhereUniqueWithoutProjectgroupInput[]
    updateMany?: projectmeetingUpdateManyWithWhereWithoutProjectgroupInput | projectmeetingUpdateManyWithWhereWithoutProjectgroupInput[]
    deleteMany?: projectmeetingScalarWhereInput | projectmeetingScalarWhereInput[]
  }

  export type gradeUpdateManyWithoutProjectgroupNestedInput = {
    create?: XOR<gradeCreateWithoutProjectgroupInput, gradeUncheckedCreateWithoutProjectgroupInput> | gradeCreateWithoutProjectgroupInput[] | gradeUncheckedCreateWithoutProjectgroupInput[]
    connectOrCreate?: gradeCreateOrConnectWithoutProjectgroupInput | gradeCreateOrConnectWithoutProjectgroupInput[]
    upsert?: gradeUpsertWithWhereUniqueWithoutProjectgroupInput | gradeUpsertWithWhereUniqueWithoutProjectgroupInput[]
    createMany?: gradeCreateManyProjectgroupInputEnvelope
    set?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    disconnect?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    delete?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    connect?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    update?: gradeUpdateWithWhereUniqueWithoutProjectgroupInput | gradeUpdateWithWhereUniqueWithoutProjectgroupInput[]
    updateMany?: gradeUpdateManyWithWhereWithoutProjectgroupInput | gradeUpdateManyWithWhereWithoutProjectgroupInput[]
    deleteMany?: gradeScalarWhereInput | gradeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type projectgroupmemberUncheckedUpdateManyWithoutProjectgroupNestedInput = {
    create?: XOR<projectgroupmemberCreateWithoutProjectgroupInput, projectgroupmemberUncheckedCreateWithoutProjectgroupInput> | projectgroupmemberCreateWithoutProjectgroupInput[] | projectgroupmemberUncheckedCreateWithoutProjectgroupInput[]
    connectOrCreate?: projectgroupmemberCreateOrConnectWithoutProjectgroupInput | projectgroupmemberCreateOrConnectWithoutProjectgroupInput[]
    upsert?: projectgroupmemberUpsertWithWhereUniqueWithoutProjectgroupInput | projectgroupmemberUpsertWithWhereUniqueWithoutProjectgroupInput[]
    createMany?: projectgroupmemberCreateManyProjectgroupInputEnvelope
    set?: projectgroupmemberWhereUniqueInput | projectgroupmemberWhereUniqueInput[]
    disconnect?: projectgroupmemberWhereUniqueInput | projectgroupmemberWhereUniqueInput[]
    delete?: projectgroupmemberWhereUniqueInput | projectgroupmemberWhereUniqueInput[]
    connect?: projectgroupmemberWhereUniqueInput | projectgroupmemberWhereUniqueInput[]
    update?: projectgroupmemberUpdateWithWhereUniqueWithoutProjectgroupInput | projectgroupmemberUpdateWithWhereUniqueWithoutProjectgroupInput[]
    updateMany?: projectgroupmemberUpdateManyWithWhereWithoutProjectgroupInput | projectgroupmemberUpdateManyWithWhereWithoutProjectgroupInput[]
    deleteMany?: projectgroupmemberScalarWhereInput | projectgroupmemberScalarWhereInput[]
  }

  export type projectmeetingUncheckedUpdateManyWithoutProjectgroupNestedInput = {
    create?: XOR<projectmeetingCreateWithoutProjectgroupInput, projectmeetingUncheckedCreateWithoutProjectgroupInput> | projectmeetingCreateWithoutProjectgroupInput[] | projectmeetingUncheckedCreateWithoutProjectgroupInput[]
    connectOrCreate?: projectmeetingCreateOrConnectWithoutProjectgroupInput | projectmeetingCreateOrConnectWithoutProjectgroupInput[]
    upsert?: projectmeetingUpsertWithWhereUniqueWithoutProjectgroupInput | projectmeetingUpsertWithWhereUniqueWithoutProjectgroupInput[]
    createMany?: projectmeetingCreateManyProjectgroupInputEnvelope
    set?: projectmeetingWhereUniqueInput | projectmeetingWhereUniqueInput[]
    disconnect?: projectmeetingWhereUniqueInput | projectmeetingWhereUniqueInput[]
    delete?: projectmeetingWhereUniqueInput | projectmeetingWhereUniqueInput[]
    connect?: projectmeetingWhereUniqueInput | projectmeetingWhereUniqueInput[]
    update?: projectmeetingUpdateWithWhereUniqueWithoutProjectgroupInput | projectmeetingUpdateWithWhereUniqueWithoutProjectgroupInput[]
    updateMany?: projectmeetingUpdateManyWithWhereWithoutProjectgroupInput | projectmeetingUpdateManyWithWhereWithoutProjectgroupInput[]
    deleteMany?: projectmeetingScalarWhereInput | projectmeetingScalarWhereInput[]
  }

  export type gradeUncheckedUpdateManyWithoutProjectgroupNestedInput = {
    create?: XOR<gradeCreateWithoutProjectgroupInput, gradeUncheckedCreateWithoutProjectgroupInput> | gradeCreateWithoutProjectgroupInput[] | gradeUncheckedCreateWithoutProjectgroupInput[]
    connectOrCreate?: gradeCreateOrConnectWithoutProjectgroupInput | gradeCreateOrConnectWithoutProjectgroupInput[]
    upsert?: gradeUpsertWithWhereUniqueWithoutProjectgroupInput | gradeUpsertWithWhereUniqueWithoutProjectgroupInput[]
    createMany?: gradeCreateManyProjectgroupInputEnvelope
    set?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    disconnect?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    delete?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    connect?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    update?: gradeUpdateWithWhereUniqueWithoutProjectgroupInput | gradeUpdateWithWhereUniqueWithoutProjectgroupInput[]
    updateMany?: gradeUpdateManyWithWhereWithoutProjectgroupInput | gradeUpdateManyWithWhereWithoutProjectgroupInput[]
    deleteMany?: gradeScalarWhereInput | gradeScalarWhereInput[]
  }

  export type studentCreateNestedOneWithoutGrouprequestInput = {
    create?: XOR<studentCreateWithoutGrouprequestInput, studentUncheckedCreateWithoutGrouprequestInput>
    connectOrCreate?: studentCreateOrConnectWithoutGrouprequestInput
    connect?: studentWhereUniqueInput
  }

  export type staffCreateNestedOneWithoutGrouprequestInput = {
    create?: XOR<staffCreateWithoutGrouprequestInput, staffUncheckedCreateWithoutGrouprequestInput>
    connectOrCreate?: staffCreateOrConnectWithoutGrouprequestInput
    connect?: staffWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type studentUpdateOneRequiredWithoutGrouprequestNestedInput = {
    create?: XOR<studentCreateWithoutGrouprequestInput, studentUncheckedCreateWithoutGrouprequestInput>
    connectOrCreate?: studentCreateOrConnectWithoutGrouprequestInput
    upsert?: studentUpsertWithoutGrouprequestInput
    connect?: studentWhereUniqueInput
    update?: XOR<XOR<studentUpdateToOneWithWhereWithoutGrouprequestInput, studentUpdateWithoutGrouprequestInput>, studentUncheckedUpdateWithoutGrouprequestInput>
  }

  export type staffUpdateOneWithoutGrouprequestNestedInput = {
    create?: XOR<staffCreateWithoutGrouprequestInput, staffUncheckedCreateWithoutGrouprequestInput>
    connectOrCreate?: staffCreateOrConnectWithoutGrouprequestInput
    upsert?: staffUpsertWithoutGrouprequestInput
    disconnect?: staffWhereInput | boolean
    delete?: staffWhereInput | boolean
    connect?: staffWhereUniqueInput
    update?: XOR<XOR<staffUpdateToOneWithWhereWithoutGrouprequestInput, staffUpdateWithoutGrouprequestInput>, staffUncheckedUpdateWithoutGrouprequestInput>
  }

  export type projectgroupCreateNestedOneWithoutProjectgroupmemberInput = {
    create?: XOR<projectgroupCreateWithoutProjectgroupmemberInput, projectgroupUncheckedCreateWithoutProjectgroupmemberInput>
    connectOrCreate?: projectgroupCreateOrConnectWithoutProjectgroupmemberInput
    connect?: projectgroupWhereUniqueInput
  }

  export type studentCreateNestedOneWithoutProjectgroupmemberInput = {
    create?: XOR<studentCreateWithoutProjectgroupmemberInput, studentUncheckedCreateWithoutProjectgroupmemberInput>
    connectOrCreate?: studentCreateOrConnectWithoutProjectgroupmemberInput
    connect?: studentWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type projectgroupUpdateOneWithoutProjectgroupmemberNestedInput = {
    create?: XOR<projectgroupCreateWithoutProjectgroupmemberInput, projectgroupUncheckedCreateWithoutProjectgroupmemberInput>
    connectOrCreate?: projectgroupCreateOrConnectWithoutProjectgroupmemberInput
    upsert?: projectgroupUpsertWithoutProjectgroupmemberInput
    disconnect?: projectgroupWhereInput | boolean
    delete?: projectgroupWhereInput | boolean
    connect?: projectgroupWhereUniqueInput
    update?: XOR<XOR<projectgroupUpdateToOneWithWhereWithoutProjectgroupmemberInput, projectgroupUpdateWithoutProjectgroupmemberInput>, projectgroupUncheckedUpdateWithoutProjectgroupmemberInput>
  }

  export type studentUpdateOneWithoutProjectgroupmemberNestedInput = {
    create?: XOR<studentCreateWithoutProjectgroupmemberInput, studentUncheckedCreateWithoutProjectgroupmemberInput>
    connectOrCreate?: studentCreateOrConnectWithoutProjectgroupmemberInput
    upsert?: studentUpsertWithoutProjectgroupmemberInput
    disconnect?: studentWhereInput | boolean
    delete?: studentWhereInput | boolean
    connect?: studentWhereUniqueInput
    update?: XOR<XOR<studentUpdateToOneWithWhereWithoutProjectgroupmemberInput, studentUpdateWithoutProjectgroupmemberInput>, studentUncheckedUpdateWithoutProjectgroupmemberInput>
  }

  export type staffCreateNestedOneWithoutProjectmeetingInput = {
    create?: XOR<staffCreateWithoutProjectmeetingInput, staffUncheckedCreateWithoutProjectmeetingInput>
    connectOrCreate?: staffCreateOrConnectWithoutProjectmeetingInput
    connect?: staffWhereUniqueInput
  }

  export type projectgroupCreateNestedOneWithoutProjectmeetingInput = {
    create?: XOR<projectgroupCreateWithoutProjectmeetingInput, projectgroupUncheckedCreateWithoutProjectmeetingInput>
    connectOrCreate?: projectgroupCreateOrConnectWithoutProjectmeetingInput
    connect?: projectgroupWhereUniqueInput
  }

  export type projectmeetingattendanceCreateNestedManyWithoutProjectmeetingInput = {
    create?: XOR<projectmeetingattendanceCreateWithoutProjectmeetingInput, projectmeetingattendanceUncheckedCreateWithoutProjectmeetingInput> | projectmeetingattendanceCreateWithoutProjectmeetingInput[] | projectmeetingattendanceUncheckedCreateWithoutProjectmeetingInput[]
    connectOrCreate?: projectmeetingattendanceCreateOrConnectWithoutProjectmeetingInput | projectmeetingattendanceCreateOrConnectWithoutProjectmeetingInput[]
    createMany?: projectmeetingattendanceCreateManyProjectmeetingInputEnvelope
    connect?: projectmeetingattendanceWhereUniqueInput | projectmeetingattendanceWhereUniqueInput[]
  }

  export type projectmeetingattendanceUncheckedCreateNestedManyWithoutProjectmeetingInput = {
    create?: XOR<projectmeetingattendanceCreateWithoutProjectmeetingInput, projectmeetingattendanceUncheckedCreateWithoutProjectmeetingInput> | projectmeetingattendanceCreateWithoutProjectmeetingInput[] | projectmeetingattendanceUncheckedCreateWithoutProjectmeetingInput[]
    connectOrCreate?: projectmeetingattendanceCreateOrConnectWithoutProjectmeetingInput | projectmeetingattendanceCreateOrConnectWithoutProjectmeetingInput[]
    createMany?: projectmeetingattendanceCreateManyProjectmeetingInputEnvelope
    connect?: projectmeetingattendanceWhereUniqueInput | projectmeetingattendanceWhereUniqueInput[]
  }

  export type staffUpdateOneWithoutProjectmeetingNestedInput = {
    create?: XOR<staffCreateWithoutProjectmeetingInput, staffUncheckedCreateWithoutProjectmeetingInput>
    connectOrCreate?: staffCreateOrConnectWithoutProjectmeetingInput
    upsert?: staffUpsertWithoutProjectmeetingInput
    disconnect?: staffWhereInput | boolean
    delete?: staffWhereInput | boolean
    connect?: staffWhereUniqueInput
    update?: XOR<XOR<staffUpdateToOneWithWhereWithoutProjectmeetingInput, staffUpdateWithoutProjectmeetingInput>, staffUncheckedUpdateWithoutProjectmeetingInput>
  }

  export type projectgroupUpdateOneWithoutProjectmeetingNestedInput = {
    create?: XOR<projectgroupCreateWithoutProjectmeetingInput, projectgroupUncheckedCreateWithoutProjectmeetingInput>
    connectOrCreate?: projectgroupCreateOrConnectWithoutProjectmeetingInput
    upsert?: projectgroupUpsertWithoutProjectmeetingInput
    disconnect?: projectgroupWhereInput | boolean
    delete?: projectgroupWhereInput | boolean
    connect?: projectgroupWhereUniqueInput
    update?: XOR<XOR<projectgroupUpdateToOneWithWhereWithoutProjectmeetingInput, projectgroupUpdateWithoutProjectmeetingInput>, projectgroupUncheckedUpdateWithoutProjectmeetingInput>
  }

  export type projectmeetingattendanceUpdateManyWithoutProjectmeetingNestedInput = {
    create?: XOR<projectmeetingattendanceCreateWithoutProjectmeetingInput, projectmeetingattendanceUncheckedCreateWithoutProjectmeetingInput> | projectmeetingattendanceCreateWithoutProjectmeetingInput[] | projectmeetingattendanceUncheckedCreateWithoutProjectmeetingInput[]
    connectOrCreate?: projectmeetingattendanceCreateOrConnectWithoutProjectmeetingInput | projectmeetingattendanceCreateOrConnectWithoutProjectmeetingInput[]
    upsert?: projectmeetingattendanceUpsertWithWhereUniqueWithoutProjectmeetingInput | projectmeetingattendanceUpsertWithWhereUniqueWithoutProjectmeetingInput[]
    createMany?: projectmeetingattendanceCreateManyProjectmeetingInputEnvelope
    set?: projectmeetingattendanceWhereUniqueInput | projectmeetingattendanceWhereUniqueInput[]
    disconnect?: projectmeetingattendanceWhereUniqueInput | projectmeetingattendanceWhereUniqueInput[]
    delete?: projectmeetingattendanceWhereUniqueInput | projectmeetingattendanceWhereUniqueInput[]
    connect?: projectmeetingattendanceWhereUniqueInput | projectmeetingattendanceWhereUniqueInput[]
    update?: projectmeetingattendanceUpdateWithWhereUniqueWithoutProjectmeetingInput | projectmeetingattendanceUpdateWithWhereUniqueWithoutProjectmeetingInput[]
    updateMany?: projectmeetingattendanceUpdateManyWithWhereWithoutProjectmeetingInput | projectmeetingattendanceUpdateManyWithWhereWithoutProjectmeetingInput[]
    deleteMany?: projectmeetingattendanceScalarWhereInput | projectmeetingattendanceScalarWhereInput[]
  }

  export type projectmeetingattendanceUncheckedUpdateManyWithoutProjectmeetingNestedInput = {
    create?: XOR<projectmeetingattendanceCreateWithoutProjectmeetingInput, projectmeetingattendanceUncheckedCreateWithoutProjectmeetingInput> | projectmeetingattendanceCreateWithoutProjectmeetingInput[] | projectmeetingattendanceUncheckedCreateWithoutProjectmeetingInput[]
    connectOrCreate?: projectmeetingattendanceCreateOrConnectWithoutProjectmeetingInput | projectmeetingattendanceCreateOrConnectWithoutProjectmeetingInput[]
    upsert?: projectmeetingattendanceUpsertWithWhereUniqueWithoutProjectmeetingInput | projectmeetingattendanceUpsertWithWhereUniqueWithoutProjectmeetingInput[]
    createMany?: projectmeetingattendanceCreateManyProjectmeetingInputEnvelope
    set?: projectmeetingattendanceWhereUniqueInput | projectmeetingattendanceWhereUniqueInput[]
    disconnect?: projectmeetingattendanceWhereUniqueInput | projectmeetingattendanceWhereUniqueInput[]
    delete?: projectmeetingattendanceWhereUniqueInput | projectmeetingattendanceWhereUniqueInput[]
    connect?: projectmeetingattendanceWhereUniqueInput | projectmeetingattendanceWhereUniqueInput[]
    update?: projectmeetingattendanceUpdateWithWhereUniqueWithoutProjectmeetingInput | projectmeetingattendanceUpdateWithWhereUniqueWithoutProjectmeetingInput[]
    updateMany?: projectmeetingattendanceUpdateManyWithWhereWithoutProjectmeetingInput | projectmeetingattendanceUpdateManyWithWhereWithoutProjectmeetingInput[]
    deleteMany?: projectmeetingattendanceScalarWhereInput | projectmeetingattendanceScalarWhereInput[]
  }

  export type projectmeetingCreateNestedOneWithoutProjectmeetingattendanceInput = {
    create?: XOR<projectmeetingCreateWithoutProjectmeetingattendanceInput, projectmeetingUncheckedCreateWithoutProjectmeetingattendanceInput>
    connectOrCreate?: projectmeetingCreateOrConnectWithoutProjectmeetingattendanceInput
    connect?: projectmeetingWhereUniqueInput
  }

  export type studentCreateNestedOneWithoutProjectmeetingattendanceInput = {
    create?: XOR<studentCreateWithoutProjectmeetingattendanceInput, studentUncheckedCreateWithoutProjectmeetingattendanceInput>
    connectOrCreate?: studentCreateOrConnectWithoutProjectmeetingattendanceInput
    connect?: studentWhereUniqueInput
  }

  export type projectmeetingUpdateOneWithoutProjectmeetingattendanceNestedInput = {
    create?: XOR<projectmeetingCreateWithoutProjectmeetingattendanceInput, projectmeetingUncheckedCreateWithoutProjectmeetingattendanceInput>
    connectOrCreate?: projectmeetingCreateOrConnectWithoutProjectmeetingattendanceInput
    upsert?: projectmeetingUpsertWithoutProjectmeetingattendanceInput
    disconnect?: projectmeetingWhereInput | boolean
    delete?: projectmeetingWhereInput | boolean
    connect?: projectmeetingWhereUniqueInput
    update?: XOR<XOR<projectmeetingUpdateToOneWithWhereWithoutProjectmeetingattendanceInput, projectmeetingUpdateWithoutProjectmeetingattendanceInput>, projectmeetingUncheckedUpdateWithoutProjectmeetingattendanceInput>
  }

  export type studentUpdateOneWithoutProjectmeetingattendanceNestedInput = {
    create?: XOR<studentCreateWithoutProjectmeetingattendanceInput, studentUncheckedCreateWithoutProjectmeetingattendanceInput>
    connectOrCreate?: studentCreateOrConnectWithoutProjectmeetingattendanceInput
    upsert?: studentUpsertWithoutProjectmeetingattendanceInput
    disconnect?: studentWhereInput | boolean
    delete?: studentWhereInput | boolean
    connect?: studentWhereUniqueInput
    update?: XOR<XOR<studentUpdateToOneWithWhereWithoutProjectmeetingattendanceInput, studentUpdateWithoutProjectmeetingattendanceInput>, studentUncheckedUpdateWithoutProjectmeetingattendanceInput>
  }

  export type projectgroupCreateNestedManyWithoutProjecttypeInput = {
    create?: XOR<projectgroupCreateWithoutProjecttypeInput, projectgroupUncheckedCreateWithoutProjecttypeInput> | projectgroupCreateWithoutProjecttypeInput[] | projectgroupUncheckedCreateWithoutProjecttypeInput[]
    connectOrCreate?: projectgroupCreateOrConnectWithoutProjecttypeInput | projectgroupCreateOrConnectWithoutProjecttypeInput[]
    createMany?: projectgroupCreateManyProjecttypeInputEnvelope
    connect?: projectgroupWhereUniqueInput | projectgroupWhereUniqueInput[]
  }

  export type projectgroupUncheckedCreateNestedManyWithoutProjecttypeInput = {
    create?: XOR<projectgroupCreateWithoutProjecttypeInput, projectgroupUncheckedCreateWithoutProjecttypeInput> | projectgroupCreateWithoutProjecttypeInput[] | projectgroupUncheckedCreateWithoutProjecttypeInput[]
    connectOrCreate?: projectgroupCreateOrConnectWithoutProjecttypeInput | projectgroupCreateOrConnectWithoutProjecttypeInput[]
    createMany?: projectgroupCreateManyProjecttypeInputEnvelope
    connect?: projectgroupWhereUniqueInput | projectgroupWhereUniqueInput[]
  }

  export type projectgroupUpdateManyWithoutProjecttypeNestedInput = {
    create?: XOR<projectgroupCreateWithoutProjecttypeInput, projectgroupUncheckedCreateWithoutProjecttypeInput> | projectgroupCreateWithoutProjecttypeInput[] | projectgroupUncheckedCreateWithoutProjecttypeInput[]
    connectOrCreate?: projectgroupCreateOrConnectWithoutProjecttypeInput | projectgroupCreateOrConnectWithoutProjecttypeInput[]
    upsert?: projectgroupUpsertWithWhereUniqueWithoutProjecttypeInput | projectgroupUpsertWithWhereUniqueWithoutProjecttypeInput[]
    createMany?: projectgroupCreateManyProjecttypeInputEnvelope
    set?: projectgroupWhereUniqueInput | projectgroupWhereUniqueInput[]
    disconnect?: projectgroupWhereUniqueInput | projectgroupWhereUniqueInput[]
    delete?: projectgroupWhereUniqueInput | projectgroupWhereUniqueInput[]
    connect?: projectgroupWhereUniqueInput | projectgroupWhereUniqueInput[]
    update?: projectgroupUpdateWithWhereUniqueWithoutProjecttypeInput | projectgroupUpdateWithWhereUniqueWithoutProjecttypeInput[]
    updateMany?: projectgroupUpdateManyWithWhereWithoutProjecttypeInput | projectgroupUpdateManyWithWhereWithoutProjecttypeInput[]
    deleteMany?: projectgroupScalarWhereInput | projectgroupScalarWhereInput[]
  }

  export type projectgroupUncheckedUpdateManyWithoutProjecttypeNestedInput = {
    create?: XOR<projectgroupCreateWithoutProjecttypeInput, projectgroupUncheckedCreateWithoutProjecttypeInput> | projectgroupCreateWithoutProjecttypeInput[] | projectgroupUncheckedCreateWithoutProjecttypeInput[]
    connectOrCreate?: projectgroupCreateOrConnectWithoutProjecttypeInput | projectgroupCreateOrConnectWithoutProjecttypeInput[]
    upsert?: projectgroupUpsertWithWhereUniqueWithoutProjecttypeInput | projectgroupUpsertWithWhereUniqueWithoutProjecttypeInput[]
    createMany?: projectgroupCreateManyProjecttypeInputEnvelope
    set?: projectgroupWhereUniqueInput | projectgroupWhereUniqueInput[]
    disconnect?: projectgroupWhereUniqueInput | projectgroupWhereUniqueInput[]
    delete?: projectgroupWhereUniqueInput | projectgroupWhereUniqueInput[]
    connect?: projectgroupWhereUniqueInput | projectgroupWhereUniqueInput[]
    update?: projectgroupUpdateWithWhereUniqueWithoutProjecttypeInput | projectgroupUpdateWithWhereUniqueWithoutProjecttypeInput[]
    updateMany?: projectgroupUpdateManyWithWhereWithoutProjecttypeInput | projectgroupUpdateManyWithWhereWithoutProjecttypeInput[]
    deleteMany?: projectgroupScalarWhereInput | projectgroupScalarWhereInput[]
  }

  export type projectgroupCreateNestedManyWithoutStaff_projectgroup_convenerstaffidTostaffInput = {
    create?: XOR<projectgroupCreateWithoutStaff_projectgroup_convenerstaffidTostaffInput, projectgroupUncheckedCreateWithoutStaff_projectgroup_convenerstaffidTostaffInput> | projectgroupCreateWithoutStaff_projectgroup_convenerstaffidTostaffInput[] | projectgroupUncheckedCreateWithoutStaff_projectgroup_convenerstaffidTostaffInput[]
    connectOrCreate?: projectgroupCreateOrConnectWithoutStaff_projectgroup_convenerstaffidTostaffInput | projectgroupCreateOrConnectWithoutStaff_projectgroup_convenerstaffidTostaffInput[]
    createMany?: projectgroupCreateManyStaff_projectgroup_convenerstaffidTostaffInputEnvelope
    connect?: projectgroupWhereUniqueInput | projectgroupWhereUniqueInput[]
  }

  export type projectgroupCreateNestedManyWithoutStaff_projectgroup_expertstaffidTostaffInput = {
    create?: XOR<projectgroupCreateWithoutStaff_projectgroup_expertstaffidTostaffInput, projectgroupUncheckedCreateWithoutStaff_projectgroup_expertstaffidTostaffInput> | projectgroupCreateWithoutStaff_projectgroup_expertstaffidTostaffInput[] | projectgroupUncheckedCreateWithoutStaff_projectgroup_expertstaffidTostaffInput[]
    connectOrCreate?: projectgroupCreateOrConnectWithoutStaff_projectgroup_expertstaffidTostaffInput | projectgroupCreateOrConnectWithoutStaff_projectgroup_expertstaffidTostaffInput[]
    createMany?: projectgroupCreateManyStaff_projectgroup_expertstaffidTostaffInputEnvelope
    connect?: projectgroupWhereUniqueInput | projectgroupWhereUniqueInput[]
  }

  export type projectmeetingCreateNestedManyWithoutStaffInput = {
    create?: XOR<projectmeetingCreateWithoutStaffInput, projectmeetingUncheckedCreateWithoutStaffInput> | projectmeetingCreateWithoutStaffInput[] | projectmeetingUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: projectmeetingCreateOrConnectWithoutStaffInput | projectmeetingCreateOrConnectWithoutStaffInput[]
    createMany?: projectmeetingCreateManyStaffInputEnvelope
    connect?: projectmeetingWhereUniqueInput | projectmeetingWhereUniqueInput[]
  }

  export type staffCreateNestedOneWithoutOther_staffInput = {
    create?: XOR<staffCreateWithoutOther_staffInput, staffUncheckedCreateWithoutOther_staffInput>
    connectOrCreate?: staffCreateOrConnectWithoutOther_staffInput
    connect?: staffWhereUniqueInput
  }

  export type staffCreateNestedManyWithoutStaffInput = {
    create?: XOR<staffCreateWithoutStaffInput, staffUncheckedCreateWithoutStaffInput> | staffCreateWithoutStaffInput[] | staffUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: staffCreateOrConnectWithoutStaffInput | staffCreateOrConnectWithoutStaffInput[]
    createMany?: staffCreateManyStaffInputEnvelope
    connect?: staffWhereUniqueInput | staffWhereUniqueInput[]
  }

  export type studentCreateNestedManyWithoutStaffInput = {
    create?: XOR<studentCreateWithoutStaffInput, studentUncheckedCreateWithoutStaffInput> | studentCreateWithoutStaffInput[] | studentUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: studentCreateOrConnectWithoutStaffInput | studentCreateOrConnectWithoutStaffInput[]
    createMany?: studentCreateManyStaffInputEnvelope
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[]
  }

  export type grouprequestCreateNestedManyWithoutApproverInput = {
    create?: XOR<grouprequestCreateWithoutApproverInput, grouprequestUncheckedCreateWithoutApproverInput> | grouprequestCreateWithoutApproverInput[] | grouprequestUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: grouprequestCreateOrConnectWithoutApproverInput | grouprequestCreateOrConnectWithoutApproverInput[]
    createMany?: grouprequestCreateManyApproverInputEnvelope
    connect?: grouprequestWhereUniqueInput | grouprequestWhereUniqueInput[]
  }

  export type gradeCreateNestedManyWithoutStaffInput = {
    create?: XOR<gradeCreateWithoutStaffInput, gradeUncheckedCreateWithoutStaffInput> | gradeCreateWithoutStaffInput[] | gradeUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: gradeCreateOrConnectWithoutStaffInput | gradeCreateOrConnectWithoutStaffInput[]
    createMany?: gradeCreateManyStaffInputEnvelope
    connect?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
  }

  export type projectgroupUncheckedCreateNestedManyWithoutStaff_projectgroup_convenerstaffidTostaffInput = {
    create?: XOR<projectgroupCreateWithoutStaff_projectgroup_convenerstaffidTostaffInput, projectgroupUncheckedCreateWithoutStaff_projectgroup_convenerstaffidTostaffInput> | projectgroupCreateWithoutStaff_projectgroup_convenerstaffidTostaffInput[] | projectgroupUncheckedCreateWithoutStaff_projectgroup_convenerstaffidTostaffInput[]
    connectOrCreate?: projectgroupCreateOrConnectWithoutStaff_projectgroup_convenerstaffidTostaffInput | projectgroupCreateOrConnectWithoutStaff_projectgroup_convenerstaffidTostaffInput[]
    createMany?: projectgroupCreateManyStaff_projectgroup_convenerstaffidTostaffInputEnvelope
    connect?: projectgroupWhereUniqueInput | projectgroupWhereUniqueInput[]
  }

  export type projectgroupUncheckedCreateNestedManyWithoutStaff_projectgroup_expertstaffidTostaffInput = {
    create?: XOR<projectgroupCreateWithoutStaff_projectgroup_expertstaffidTostaffInput, projectgroupUncheckedCreateWithoutStaff_projectgroup_expertstaffidTostaffInput> | projectgroupCreateWithoutStaff_projectgroup_expertstaffidTostaffInput[] | projectgroupUncheckedCreateWithoutStaff_projectgroup_expertstaffidTostaffInput[]
    connectOrCreate?: projectgroupCreateOrConnectWithoutStaff_projectgroup_expertstaffidTostaffInput | projectgroupCreateOrConnectWithoutStaff_projectgroup_expertstaffidTostaffInput[]
    createMany?: projectgroupCreateManyStaff_projectgroup_expertstaffidTostaffInputEnvelope
    connect?: projectgroupWhereUniqueInput | projectgroupWhereUniqueInput[]
  }

  export type projectmeetingUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<projectmeetingCreateWithoutStaffInput, projectmeetingUncheckedCreateWithoutStaffInput> | projectmeetingCreateWithoutStaffInput[] | projectmeetingUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: projectmeetingCreateOrConnectWithoutStaffInput | projectmeetingCreateOrConnectWithoutStaffInput[]
    createMany?: projectmeetingCreateManyStaffInputEnvelope
    connect?: projectmeetingWhereUniqueInput | projectmeetingWhereUniqueInput[]
  }

  export type staffUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<staffCreateWithoutStaffInput, staffUncheckedCreateWithoutStaffInput> | staffCreateWithoutStaffInput[] | staffUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: staffCreateOrConnectWithoutStaffInput | staffCreateOrConnectWithoutStaffInput[]
    createMany?: staffCreateManyStaffInputEnvelope
    connect?: staffWhereUniqueInput | staffWhereUniqueInput[]
  }

  export type studentUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<studentCreateWithoutStaffInput, studentUncheckedCreateWithoutStaffInput> | studentCreateWithoutStaffInput[] | studentUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: studentCreateOrConnectWithoutStaffInput | studentCreateOrConnectWithoutStaffInput[]
    createMany?: studentCreateManyStaffInputEnvelope
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[]
  }

  export type grouprequestUncheckedCreateNestedManyWithoutApproverInput = {
    create?: XOR<grouprequestCreateWithoutApproverInput, grouprequestUncheckedCreateWithoutApproverInput> | grouprequestCreateWithoutApproverInput[] | grouprequestUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: grouprequestCreateOrConnectWithoutApproverInput | grouprequestCreateOrConnectWithoutApproverInput[]
    createMany?: grouprequestCreateManyApproverInputEnvelope
    connect?: grouprequestWhereUniqueInput | grouprequestWhereUniqueInput[]
  }

  export type gradeUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<gradeCreateWithoutStaffInput, gradeUncheckedCreateWithoutStaffInput> | gradeCreateWithoutStaffInput[] | gradeUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: gradeCreateOrConnectWithoutStaffInput | gradeCreateOrConnectWithoutStaffInput[]
    createMany?: gradeCreateManyStaffInputEnvelope
    connect?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
  }

  export type projectgroupUpdateManyWithoutStaff_projectgroup_convenerstaffidTostaffNestedInput = {
    create?: XOR<projectgroupCreateWithoutStaff_projectgroup_convenerstaffidTostaffInput, projectgroupUncheckedCreateWithoutStaff_projectgroup_convenerstaffidTostaffInput> | projectgroupCreateWithoutStaff_projectgroup_convenerstaffidTostaffInput[] | projectgroupUncheckedCreateWithoutStaff_projectgroup_convenerstaffidTostaffInput[]
    connectOrCreate?: projectgroupCreateOrConnectWithoutStaff_projectgroup_convenerstaffidTostaffInput | projectgroupCreateOrConnectWithoutStaff_projectgroup_convenerstaffidTostaffInput[]
    upsert?: projectgroupUpsertWithWhereUniqueWithoutStaff_projectgroup_convenerstaffidTostaffInput | projectgroupUpsertWithWhereUniqueWithoutStaff_projectgroup_convenerstaffidTostaffInput[]
    createMany?: projectgroupCreateManyStaff_projectgroup_convenerstaffidTostaffInputEnvelope
    set?: projectgroupWhereUniqueInput | projectgroupWhereUniqueInput[]
    disconnect?: projectgroupWhereUniqueInput | projectgroupWhereUniqueInput[]
    delete?: projectgroupWhereUniqueInput | projectgroupWhereUniqueInput[]
    connect?: projectgroupWhereUniqueInput | projectgroupWhereUniqueInput[]
    update?: projectgroupUpdateWithWhereUniqueWithoutStaff_projectgroup_convenerstaffidTostaffInput | projectgroupUpdateWithWhereUniqueWithoutStaff_projectgroup_convenerstaffidTostaffInput[]
    updateMany?: projectgroupUpdateManyWithWhereWithoutStaff_projectgroup_convenerstaffidTostaffInput | projectgroupUpdateManyWithWhereWithoutStaff_projectgroup_convenerstaffidTostaffInput[]
    deleteMany?: projectgroupScalarWhereInput | projectgroupScalarWhereInput[]
  }

  export type projectgroupUpdateManyWithoutStaff_projectgroup_expertstaffidTostaffNestedInput = {
    create?: XOR<projectgroupCreateWithoutStaff_projectgroup_expertstaffidTostaffInput, projectgroupUncheckedCreateWithoutStaff_projectgroup_expertstaffidTostaffInput> | projectgroupCreateWithoutStaff_projectgroup_expertstaffidTostaffInput[] | projectgroupUncheckedCreateWithoutStaff_projectgroup_expertstaffidTostaffInput[]
    connectOrCreate?: projectgroupCreateOrConnectWithoutStaff_projectgroup_expertstaffidTostaffInput | projectgroupCreateOrConnectWithoutStaff_projectgroup_expertstaffidTostaffInput[]
    upsert?: projectgroupUpsertWithWhereUniqueWithoutStaff_projectgroup_expertstaffidTostaffInput | projectgroupUpsertWithWhereUniqueWithoutStaff_projectgroup_expertstaffidTostaffInput[]
    createMany?: projectgroupCreateManyStaff_projectgroup_expertstaffidTostaffInputEnvelope
    set?: projectgroupWhereUniqueInput | projectgroupWhereUniqueInput[]
    disconnect?: projectgroupWhereUniqueInput | projectgroupWhereUniqueInput[]
    delete?: projectgroupWhereUniqueInput | projectgroupWhereUniqueInput[]
    connect?: projectgroupWhereUniqueInput | projectgroupWhereUniqueInput[]
    update?: projectgroupUpdateWithWhereUniqueWithoutStaff_projectgroup_expertstaffidTostaffInput | projectgroupUpdateWithWhereUniqueWithoutStaff_projectgroup_expertstaffidTostaffInput[]
    updateMany?: projectgroupUpdateManyWithWhereWithoutStaff_projectgroup_expertstaffidTostaffInput | projectgroupUpdateManyWithWhereWithoutStaff_projectgroup_expertstaffidTostaffInput[]
    deleteMany?: projectgroupScalarWhereInput | projectgroupScalarWhereInput[]
  }

  export type projectmeetingUpdateManyWithoutStaffNestedInput = {
    create?: XOR<projectmeetingCreateWithoutStaffInput, projectmeetingUncheckedCreateWithoutStaffInput> | projectmeetingCreateWithoutStaffInput[] | projectmeetingUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: projectmeetingCreateOrConnectWithoutStaffInput | projectmeetingCreateOrConnectWithoutStaffInput[]
    upsert?: projectmeetingUpsertWithWhereUniqueWithoutStaffInput | projectmeetingUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: projectmeetingCreateManyStaffInputEnvelope
    set?: projectmeetingWhereUniqueInput | projectmeetingWhereUniqueInput[]
    disconnect?: projectmeetingWhereUniqueInput | projectmeetingWhereUniqueInput[]
    delete?: projectmeetingWhereUniqueInput | projectmeetingWhereUniqueInput[]
    connect?: projectmeetingWhereUniqueInput | projectmeetingWhereUniqueInput[]
    update?: projectmeetingUpdateWithWhereUniqueWithoutStaffInput | projectmeetingUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: projectmeetingUpdateManyWithWhereWithoutStaffInput | projectmeetingUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: projectmeetingScalarWhereInput | projectmeetingScalarWhereInput[]
  }

  export type staffUpdateOneWithoutOther_staffNestedInput = {
    create?: XOR<staffCreateWithoutOther_staffInput, staffUncheckedCreateWithoutOther_staffInput>
    connectOrCreate?: staffCreateOrConnectWithoutOther_staffInput
    upsert?: staffUpsertWithoutOther_staffInput
    disconnect?: staffWhereInput | boolean
    delete?: staffWhereInput | boolean
    connect?: staffWhereUniqueInput
    update?: XOR<XOR<staffUpdateToOneWithWhereWithoutOther_staffInput, staffUpdateWithoutOther_staffInput>, staffUncheckedUpdateWithoutOther_staffInput>
  }

  export type staffUpdateManyWithoutStaffNestedInput = {
    create?: XOR<staffCreateWithoutStaffInput, staffUncheckedCreateWithoutStaffInput> | staffCreateWithoutStaffInput[] | staffUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: staffCreateOrConnectWithoutStaffInput | staffCreateOrConnectWithoutStaffInput[]
    upsert?: staffUpsertWithWhereUniqueWithoutStaffInput | staffUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: staffCreateManyStaffInputEnvelope
    set?: staffWhereUniqueInput | staffWhereUniqueInput[]
    disconnect?: staffWhereUniqueInput | staffWhereUniqueInput[]
    delete?: staffWhereUniqueInput | staffWhereUniqueInput[]
    connect?: staffWhereUniqueInput | staffWhereUniqueInput[]
    update?: staffUpdateWithWhereUniqueWithoutStaffInput | staffUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: staffUpdateManyWithWhereWithoutStaffInput | staffUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: staffScalarWhereInput | staffScalarWhereInput[]
  }

  export type studentUpdateManyWithoutStaffNestedInput = {
    create?: XOR<studentCreateWithoutStaffInput, studentUncheckedCreateWithoutStaffInput> | studentCreateWithoutStaffInput[] | studentUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: studentCreateOrConnectWithoutStaffInput | studentCreateOrConnectWithoutStaffInput[]
    upsert?: studentUpsertWithWhereUniqueWithoutStaffInput | studentUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: studentCreateManyStaffInputEnvelope
    set?: studentWhereUniqueInput | studentWhereUniqueInput[]
    disconnect?: studentWhereUniqueInput | studentWhereUniqueInput[]
    delete?: studentWhereUniqueInput | studentWhereUniqueInput[]
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[]
    update?: studentUpdateWithWhereUniqueWithoutStaffInput | studentUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: studentUpdateManyWithWhereWithoutStaffInput | studentUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: studentScalarWhereInput | studentScalarWhereInput[]
  }

  export type grouprequestUpdateManyWithoutApproverNestedInput = {
    create?: XOR<grouprequestCreateWithoutApproverInput, grouprequestUncheckedCreateWithoutApproverInput> | grouprequestCreateWithoutApproverInput[] | grouprequestUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: grouprequestCreateOrConnectWithoutApproverInput | grouprequestCreateOrConnectWithoutApproverInput[]
    upsert?: grouprequestUpsertWithWhereUniqueWithoutApproverInput | grouprequestUpsertWithWhereUniqueWithoutApproverInput[]
    createMany?: grouprequestCreateManyApproverInputEnvelope
    set?: grouprequestWhereUniqueInput | grouprequestWhereUniqueInput[]
    disconnect?: grouprequestWhereUniqueInput | grouprequestWhereUniqueInput[]
    delete?: grouprequestWhereUniqueInput | grouprequestWhereUniqueInput[]
    connect?: grouprequestWhereUniqueInput | grouprequestWhereUniqueInput[]
    update?: grouprequestUpdateWithWhereUniqueWithoutApproverInput | grouprequestUpdateWithWhereUniqueWithoutApproverInput[]
    updateMany?: grouprequestUpdateManyWithWhereWithoutApproverInput | grouprequestUpdateManyWithWhereWithoutApproverInput[]
    deleteMany?: grouprequestScalarWhereInput | grouprequestScalarWhereInput[]
  }

  export type gradeUpdateManyWithoutStaffNestedInput = {
    create?: XOR<gradeCreateWithoutStaffInput, gradeUncheckedCreateWithoutStaffInput> | gradeCreateWithoutStaffInput[] | gradeUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: gradeCreateOrConnectWithoutStaffInput | gradeCreateOrConnectWithoutStaffInput[]
    upsert?: gradeUpsertWithWhereUniqueWithoutStaffInput | gradeUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: gradeCreateManyStaffInputEnvelope
    set?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    disconnect?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    delete?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    connect?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    update?: gradeUpdateWithWhereUniqueWithoutStaffInput | gradeUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: gradeUpdateManyWithWhereWithoutStaffInput | gradeUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: gradeScalarWhereInput | gradeScalarWhereInput[]
  }

  export type projectgroupUncheckedUpdateManyWithoutStaff_projectgroup_convenerstaffidTostaffNestedInput = {
    create?: XOR<projectgroupCreateWithoutStaff_projectgroup_convenerstaffidTostaffInput, projectgroupUncheckedCreateWithoutStaff_projectgroup_convenerstaffidTostaffInput> | projectgroupCreateWithoutStaff_projectgroup_convenerstaffidTostaffInput[] | projectgroupUncheckedCreateWithoutStaff_projectgroup_convenerstaffidTostaffInput[]
    connectOrCreate?: projectgroupCreateOrConnectWithoutStaff_projectgroup_convenerstaffidTostaffInput | projectgroupCreateOrConnectWithoutStaff_projectgroup_convenerstaffidTostaffInput[]
    upsert?: projectgroupUpsertWithWhereUniqueWithoutStaff_projectgroup_convenerstaffidTostaffInput | projectgroupUpsertWithWhereUniqueWithoutStaff_projectgroup_convenerstaffidTostaffInput[]
    createMany?: projectgroupCreateManyStaff_projectgroup_convenerstaffidTostaffInputEnvelope
    set?: projectgroupWhereUniqueInput | projectgroupWhereUniqueInput[]
    disconnect?: projectgroupWhereUniqueInput | projectgroupWhereUniqueInput[]
    delete?: projectgroupWhereUniqueInput | projectgroupWhereUniqueInput[]
    connect?: projectgroupWhereUniqueInput | projectgroupWhereUniqueInput[]
    update?: projectgroupUpdateWithWhereUniqueWithoutStaff_projectgroup_convenerstaffidTostaffInput | projectgroupUpdateWithWhereUniqueWithoutStaff_projectgroup_convenerstaffidTostaffInput[]
    updateMany?: projectgroupUpdateManyWithWhereWithoutStaff_projectgroup_convenerstaffidTostaffInput | projectgroupUpdateManyWithWhereWithoutStaff_projectgroup_convenerstaffidTostaffInput[]
    deleteMany?: projectgroupScalarWhereInput | projectgroupScalarWhereInput[]
  }

  export type projectgroupUncheckedUpdateManyWithoutStaff_projectgroup_expertstaffidTostaffNestedInput = {
    create?: XOR<projectgroupCreateWithoutStaff_projectgroup_expertstaffidTostaffInput, projectgroupUncheckedCreateWithoutStaff_projectgroup_expertstaffidTostaffInput> | projectgroupCreateWithoutStaff_projectgroup_expertstaffidTostaffInput[] | projectgroupUncheckedCreateWithoutStaff_projectgroup_expertstaffidTostaffInput[]
    connectOrCreate?: projectgroupCreateOrConnectWithoutStaff_projectgroup_expertstaffidTostaffInput | projectgroupCreateOrConnectWithoutStaff_projectgroup_expertstaffidTostaffInput[]
    upsert?: projectgroupUpsertWithWhereUniqueWithoutStaff_projectgroup_expertstaffidTostaffInput | projectgroupUpsertWithWhereUniqueWithoutStaff_projectgroup_expertstaffidTostaffInput[]
    createMany?: projectgroupCreateManyStaff_projectgroup_expertstaffidTostaffInputEnvelope
    set?: projectgroupWhereUniqueInput | projectgroupWhereUniqueInput[]
    disconnect?: projectgroupWhereUniqueInput | projectgroupWhereUniqueInput[]
    delete?: projectgroupWhereUniqueInput | projectgroupWhereUniqueInput[]
    connect?: projectgroupWhereUniqueInput | projectgroupWhereUniqueInput[]
    update?: projectgroupUpdateWithWhereUniqueWithoutStaff_projectgroup_expertstaffidTostaffInput | projectgroupUpdateWithWhereUniqueWithoutStaff_projectgroup_expertstaffidTostaffInput[]
    updateMany?: projectgroupUpdateManyWithWhereWithoutStaff_projectgroup_expertstaffidTostaffInput | projectgroupUpdateManyWithWhereWithoutStaff_projectgroup_expertstaffidTostaffInput[]
    deleteMany?: projectgroupScalarWhereInput | projectgroupScalarWhereInput[]
  }

  export type projectmeetingUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<projectmeetingCreateWithoutStaffInput, projectmeetingUncheckedCreateWithoutStaffInput> | projectmeetingCreateWithoutStaffInput[] | projectmeetingUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: projectmeetingCreateOrConnectWithoutStaffInput | projectmeetingCreateOrConnectWithoutStaffInput[]
    upsert?: projectmeetingUpsertWithWhereUniqueWithoutStaffInput | projectmeetingUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: projectmeetingCreateManyStaffInputEnvelope
    set?: projectmeetingWhereUniqueInput | projectmeetingWhereUniqueInput[]
    disconnect?: projectmeetingWhereUniqueInput | projectmeetingWhereUniqueInput[]
    delete?: projectmeetingWhereUniqueInput | projectmeetingWhereUniqueInput[]
    connect?: projectmeetingWhereUniqueInput | projectmeetingWhereUniqueInput[]
    update?: projectmeetingUpdateWithWhereUniqueWithoutStaffInput | projectmeetingUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: projectmeetingUpdateManyWithWhereWithoutStaffInput | projectmeetingUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: projectmeetingScalarWhereInput | projectmeetingScalarWhereInput[]
  }

  export type staffUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<staffCreateWithoutStaffInput, staffUncheckedCreateWithoutStaffInput> | staffCreateWithoutStaffInput[] | staffUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: staffCreateOrConnectWithoutStaffInput | staffCreateOrConnectWithoutStaffInput[]
    upsert?: staffUpsertWithWhereUniqueWithoutStaffInput | staffUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: staffCreateManyStaffInputEnvelope
    set?: staffWhereUniqueInput | staffWhereUniqueInput[]
    disconnect?: staffWhereUniqueInput | staffWhereUniqueInput[]
    delete?: staffWhereUniqueInput | staffWhereUniqueInput[]
    connect?: staffWhereUniqueInput | staffWhereUniqueInput[]
    update?: staffUpdateWithWhereUniqueWithoutStaffInput | staffUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: staffUpdateManyWithWhereWithoutStaffInput | staffUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: staffScalarWhereInput | staffScalarWhereInput[]
  }

  export type studentUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<studentCreateWithoutStaffInput, studentUncheckedCreateWithoutStaffInput> | studentCreateWithoutStaffInput[] | studentUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: studentCreateOrConnectWithoutStaffInput | studentCreateOrConnectWithoutStaffInput[]
    upsert?: studentUpsertWithWhereUniqueWithoutStaffInput | studentUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: studentCreateManyStaffInputEnvelope
    set?: studentWhereUniqueInput | studentWhereUniqueInput[]
    disconnect?: studentWhereUniqueInput | studentWhereUniqueInput[]
    delete?: studentWhereUniqueInput | studentWhereUniqueInput[]
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[]
    update?: studentUpdateWithWhereUniqueWithoutStaffInput | studentUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: studentUpdateManyWithWhereWithoutStaffInput | studentUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: studentScalarWhereInput | studentScalarWhereInput[]
  }

  export type grouprequestUncheckedUpdateManyWithoutApproverNestedInput = {
    create?: XOR<grouprequestCreateWithoutApproverInput, grouprequestUncheckedCreateWithoutApproverInput> | grouprequestCreateWithoutApproverInput[] | grouprequestUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: grouprequestCreateOrConnectWithoutApproverInput | grouprequestCreateOrConnectWithoutApproverInput[]
    upsert?: grouprequestUpsertWithWhereUniqueWithoutApproverInput | grouprequestUpsertWithWhereUniqueWithoutApproverInput[]
    createMany?: grouprequestCreateManyApproverInputEnvelope
    set?: grouprequestWhereUniqueInput | grouprequestWhereUniqueInput[]
    disconnect?: grouprequestWhereUniqueInput | grouprequestWhereUniqueInput[]
    delete?: grouprequestWhereUniqueInput | grouprequestWhereUniqueInput[]
    connect?: grouprequestWhereUniqueInput | grouprequestWhereUniqueInput[]
    update?: grouprequestUpdateWithWhereUniqueWithoutApproverInput | grouprequestUpdateWithWhereUniqueWithoutApproverInput[]
    updateMany?: grouprequestUpdateManyWithWhereWithoutApproverInput | grouprequestUpdateManyWithWhereWithoutApproverInput[]
    deleteMany?: grouprequestScalarWhereInput | grouprequestScalarWhereInput[]
  }

  export type gradeUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<gradeCreateWithoutStaffInput, gradeUncheckedCreateWithoutStaffInput> | gradeCreateWithoutStaffInput[] | gradeUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: gradeCreateOrConnectWithoutStaffInput | gradeCreateOrConnectWithoutStaffInput[]
    upsert?: gradeUpsertWithWhereUniqueWithoutStaffInput | gradeUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: gradeCreateManyStaffInputEnvelope
    set?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    disconnect?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    delete?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    connect?: gradeWhereUniqueInput | gradeWhereUniqueInput[]
    update?: gradeUpdateWithWhereUniqueWithoutStaffInput | gradeUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: gradeUpdateManyWithWhereWithoutStaffInput | gradeUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: gradeScalarWhereInput | gradeScalarWhereInput[]
  }

  export type projectgroupmemberCreateNestedManyWithoutStudentInput = {
    create?: XOR<projectgroupmemberCreateWithoutStudentInput, projectgroupmemberUncheckedCreateWithoutStudentInput> | projectgroupmemberCreateWithoutStudentInput[] | projectgroupmemberUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: projectgroupmemberCreateOrConnectWithoutStudentInput | projectgroupmemberCreateOrConnectWithoutStudentInput[]
    createMany?: projectgroupmemberCreateManyStudentInputEnvelope
    connect?: projectgroupmemberWhereUniqueInput | projectgroupmemberWhereUniqueInput[]
  }

  export type projectmeetingattendanceCreateNestedManyWithoutStudentInput = {
    create?: XOR<projectmeetingattendanceCreateWithoutStudentInput, projectmeetingattendanceUncheckedCreateWithoutStudentInput> | projectmeetingattendanceCreateWithoutStudentInput[] | projectmeetingattendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: projectmeetingattendanceCreateOrConnectWithoutStudentInput | projectmeetingattendanceCreateOrConnectWithoutStudentInput[]
    createMany?: projectmeetingattendanceCreateManyStudentInputEnvelope
    connect?: projectmeetingattendanceWhereUniqueInput | projectmeetingattendanceWhereUniqueInput[]
  }

  export type staffCreateNestedOneWithoutStudentInput = {
    create?: XOR<staffCreateWithoutStudentInput, staffUncheckedCreateWithoutStudentInput>
    connectOrCreate?: staffCreateOrConnectWithoutStudentInput
    connect?: staffWhereUniqueInput
  }

  export type grouprequestCreateNestedManyWithoutLeaderInput = {
    create?: XOR<grouprequestCreateWithoutLeaderInput, grouprequestUncheckedCreateWithoutLeaderInput> | grouprequestCreateWithoutLeaderInput[] | grouprequestUncheckedCreateWithoutLeaderInput[]
    connectOrCreate?: grouprequestCreateOrConnectWithoutLeaderInput | grouprequestCreateOrConnectWithoutLeaderInput[]
    createMany?: grouprequestCreateManyLeaderInputEnvelope
    connect?: grouprequestWhereUniqueInput | grouprequestWhereUniqueInput[]
  }

  export type projectgroupmemberUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<projectgroupmemberCreateWithoutStudentInput, projectgroupmemberUncheckedCreateWithoutStudentInput> | projectgroupmemberCreateWithoutStudentInput[] | projectgroupmemberUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: projectgroupmemberCreateOrConnectWithoutStudentInput | projectgroupmemberCreateOrConnectWithoutStudentInput[]
    createMany?: projectgroupmemberCreateManyStudentInputEnvelope
    connect?: projectgroupmemberWhereUniqueInput | projectgroupmemberWhereUniqueInput[]
  }

  export type projectmeetingattendanceUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<projectmeetingattendanceCreateWithoutStudentInput, projectmeetingattendanceUncheckedCreateWithoutStudentInput> | projectmeetingattendanceCreateWithoutStudentInput[] | projectmeetingattendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: projectmeetingattendanceCreateOrConnectWithoutStudentInput | projectmeetingattendanceCreateOrConnectWithoutStudentInput[]
    createMany?: projectmeetingattendanceCreateManyStudentInputEnvelope
    connect?: projectmeetingattendanceWhereUniqueInput | projectmeetingattendanceWhereUniqueInput[]
  }

  export type grouprequestUncheckedCreateNestedManyWithoutLeaderInput = {
    create?: XOR<grouprequestCreateWithoutLeaderInput, grouprequestUncheckedCreateWithoutLeaderInput> | grouprequestCreateWithoutLeaderInput[] | grouprequestUncheckedCreateWithoutLeaderInput[]
    connectOrCreate?: grouprequestCreateOrConnectWithoutLeaderInput | grouprequestCreateOrConnectWithoutLeaderInput[]
    createMany?: grouprequestCreateManyLeaderInputEnvelope
    connect?: grouprequestWhereUniqueInput | grouprequestWhereUniqueInput[]
  }

  export type projectgroupmemberUpdateManyWithoutStudentNestedInput = {
    create?: XOR<projectgroupmemberCreateWithoutStudentInput, projectgroupmemberUncheckedCreateWithoutStudentInput> | projectgroupmemberCreateWithoutStudentInput[] | projectgroupmemberUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: projectgroupmemberCreateOrConnectWithoutStudentInput | projectgroupmemberCreateOrConnectWithoutStudentInput[]
    upsert?: projectgroupmemberUpsertWithWhereUniqueWithoutStudentInput | projectgroupmemberUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: projectgroupmemberCreateManyStudentInputEnvelope
    set?: projectgroupmemberWhereUniqueInput | projectgroupmemberWhereUniqueInput[]
    disconnect?: projectgroupmemberWhereUniqueInput | projectgroupmemberWhereUniqueInput[]
    delete?: projectgroupmemberWhereUniqueInput | projectgroupmemberWhereUniqueInput[]
    connect?: projectgroupmemberWhereUniqueInput | projectgroupmemberWhereUniqueInput[]
    update?: projectgroupmemberUpdateWithWhereUniqueWithoutStudentInput | projectgroupmemberUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: projectgroupmemberUpdateManyWithWhereWithoutStudentInput | projectgroupmemberUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: projectgroupmemberScalarWhereInput | projectgroupmemberScalarWhereInput[]
  }

  export type projectmeetingattendanceUpdateManyWithoutStudentNestedInput = {
    create?: XOR<projectmeetingattendanceCreateWithoutStudentInput, projectmeetingattendanceUncheckedCreateWithoutStudentInput> | projectmeetingattendanceCreateWithoutStudentInput[] | projectmeetingattendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: projectmeetingattendanceCreateOrConnectWithoutStudentInput | projectmeetingattendanceCreateOrConnectWithoutStudentInput[]
    upsert?: projectmeetingattendanceUpsertWithWhereUniqueWithoutStudentInput | projectmeetingattendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: projectmeetingattendanceCreateManyStudentInputEnvelope
    set?: projectmeetingattendanceWhereUniqueInput | projectmeetingattendanceWhereUniqueInput[]
    disconnect?: projectmeetingattendanceWhereUniqueInput | projectmeetingattendanceWhereUniqueInput[]
    delete?: projectmeetingattendanceWhereUniqueInput | projectmeetingattendanceWhereUniqueInput[]
    connect?: projectmeetingattendanceWhereUniqueInput | projectmeetingattendanceWhereUniqueInput[]
    update?: projectmeetingattendanceUpdateWithWhereUniqueWithoutStudentInput | projectmeetingattendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: projectmeetingattendanceUpdateManyWithWhereWithoutStudentInput | projectmeetingattendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: projectmeetingattendanceScalarWhereInput | projectmeetingattendanceScalarWhereInput[]
  }

  export type staffUpdateOneWithoutStudentNestedInput = {
    create?: XOR<staffCreateWithoutStudentInput, staffUncheckedCreateWithoutStudentInput>
    connectOrCreate?: staffCreateOrConnectWithoutStudentInput
    upsert?: staffUpsertWithoutStudentInput
    disconnect?: staffWhereInput | boolean
    delete?: staffWhereInput | boolean
    connect?: staffWhereUniqueInput
    update?: XOR<XOR<staffUpdateToOneWithWhereWithoutStudentInput, staffUpdateWithoutStudentInput>, staffUncheckedUpdateWithoutStudentInput>
  }

  export type grouprequestUpdateManyWithoutLeaderNestedInput = {
    create?: XOR<grouprequestCreateWithoutLeaderInput, grouprequestUncheckedCreateWithoutLeaderInput> | grouprequestCreateWithoutLeaderInput[] | grouprequestUncheckedCreateWithoutLeaderInput[]
    connectOrCreate?: grouprequestCreateOrConnectWithoutLeaderInput | grouprequestCreateOrConnectWithoutLeaderInput[]
    upsert?: grouprequestUpsertWithWhereUniqueWithoutLeaderInput | grouprequestUpsertWithWhereUniqueWithoutLeaderInput[]
    createMany?: grouprequestCreateManyLeaderInputEnvelope
    set?: grouprequestWhereUniqueInput | grouprequestWhereUniqueInput[]
    disconnect?: grouprequestWhereUniqueInput | grouprequestWhereUniqueInput[]
    delete?: grouprequestWhereUniqueInput | grouprequestWhereUniqueInput[]
    connect?: grouprequestWhereUniqueInput | grouprequestWhereUniqueInput[]
    update?: grouprequestUpdateWithWhereUniqueWithoutLeaderInput | grouprequestUpdateWithWhereUniqueWithoutLeaderInput[]
    updateMany?: grouprequestUpdateManyWithWhereWithoutLeaderInput | grouprequestUpdateManyWithWhereWithoutLeaderInput[]
    deleteMany?: grouprequestScalarWhereInput | grouprequestScalarWhereInput[]
  }

  export type projectgroupmemberUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<projectgroupmemberCreateWithoutStudentInput, projectgroupmemberUncheckedCreateWithoutStudentInput> | projectgroupmemberCreateWithoutStudentInput[] | projectgroupmemberUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: projectgroupmemberCreateOrConnectWithoutStudentInput | projectgroupmemberCreateOrConnectWithoutStudentInput[]
    upsert?: projectgroupmemberUpsertWithWhereUniqueWithoutStudentInput | projectgroupmemberUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: projectgroupmemberCreateManyStudentInputEnvelope
    set?: projectgroupmemberWhereUniqueInput | projectgroupmemberWhereUniqueInput[]
    disconnect?: projectgroupmemberWhereUniqueInput | projectgroupmemberWhereUniqueInput[]
    delete?: projectgroupmemberWhereUniqueInput | projectgroupmemberWhereUniqueInput[]
    connect?: projectgroupmemberWhereUniqueInput | projectgroupmemberWhereUniqueInput[]
    update?: projectgroupmemberUpdateWithWhereUniqueWithoutStudentInput | projectgroupmemberUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: projectgroupmemberUpdateManyWithWhereWithoutStudentInput | projectgroupmemberUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: projectgroupmemberScalarWhereInput | projectgroupmemberScalarWhereInput[]
  }

  export type projectmeetingattendanceUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<projectmeetingattendanceCreateWithoutStudentInput, projectmeetingattendanceUncheckedCreateWithoutStudentInput> | projectmeetingattendanceCreateWithoutStudentInput[] | projectmeetingattendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: projectmeetingattendanceCreateOrConnectWithoutStudentInput | projectmeetingattendanceCreateOrConnectWithoutStudentInput[]
    upsert?: projectmeetingattendanceUpsertWithWhereUniqueWithoutStudentInput | projectmeetingattendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: projectmeetingattendanceCreateManyStudentInputEnvelope
    set?: projectmeetingattendanceWhereUniqueInput | projectmeetingattendanceWhereUniqueInput[]
    disconnect?: projectmeetingattendanceWhereUniqueInput | projectmeetingattendanceWhereUniqueInput[]
    delete?: projectmeetingattendanceWhereUniqueInput | projectmeetingattendanceWhereUniqueInput[]
    connect?: projectmeetingattendanceWhereUniqueInput | projectmeetingattendanceWhereUniqueInput[]
    update?: projectmeetingattendanceUpdateWithWhereUniqueWithoutStudentInput | projectmeetingattendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: projectmeetingattendanceUpdateManyWithWhereWithoutStudentInput | projectmeetingattendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: projectmeetingattendanceScalarWhereInput | projectmeetingattendanceScalarWhereInput[]
  }

  export type grouprequestUncheckedUpdateManyWithoutLeaderNestedInput = {
    create?: XOR<grouprequestCreateWithoutLeaderInput, grouprequestUncheckedCreateWithoutLeaderInput> | grouprequestCreateWithoutLeaderInput[] | grouprequestUncheckedCreateWithoutLeaderInput[]
    connectOrCreate?: grouprequestCreateOrConnectWithoutLeaderInput | grouprequestCreateOrConnectWithoutLeaderInput[]
    upsert?: grouprequestUpsertWithWhereUniqueWithoutLeaderInput | grouprequestUpsertWithWhereUniqueWithoutLeaderInput[]
    createMany?: grouprequestCreateManyLeaderInputEnvelope
    set?: grouprequestWhereUniqueInput | grouprequestWhereUniqueInput[]
    disconnect?: grouprequestWhereUniqueInput | grouprequestWhereUniqueInput[]
    delete?: grouprequestWhereUniqueInput | grouprequestWhereUniqueInput[]
    connect?: grouprequestWhereUniqueInput | grouprequestWhereUniqueInput[]
    update?: grouprequestUpdateWithWhereUniqueWithoutLeaderInput | grouprequestUpdateWithWhereUniqueWithoutLeaderInput[]
    updateMany?: grouprequestUpdateManyWithWhereWithoutLeaderInput | grouprequestUpdateManyWithWhereWithoutLeaderInput[]
    deleteMany?: grouprequestScalarWhereInput | grouprequestScalarWhereInput[]
  }

  export type projectgroupCreateNestedOneWithoutGradeInput = {
    create?: XOR<projectgroupCreateWithoutGradeInput, projectgroupUncheckedCreateWithoutGradeInput>
    connectOrCreate?: projectgroupCreateOrConnectWithoutGradeInput
    connect?: projectgroupWhereUniqueInput
  }

  export type staffCreateNestedOneWithoutGradeInput = {
    create?: XOR<staffCreateWithoutGradeInput, staffUncheckedCreateWithoutGradeInput>
    connectOrCreate?: staffCreateOrConnectWithoutGradeInput
    connect?: staffWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type projectgroupUpdateOneRequiredWithoutGradeNestedInput = {
    create?: XOR<projectgroupCreateWithoutGradeInput, projectgroupUncheckedCreateWithoutGradeInput>
    connectOrCreate?: projectgroupCreateOrConnectWithoutGradeInput
    upsert?: projectgroupUpsertWithoutGradeInput
    connect?: projectgroupWhereUniqueInput
    update?: XOR<XOR<projectgroupUpdateToOneWithWhereWithoutGradeInput, projectgroupUpdateWithoutGradeInput>, projectgroupUncheckedUpdateWithoutGradeInput>
  }

  export type staffUpdateOneRequiredWithoutGradeNestedInput = {
    create?: XOR<staffCreateWithoutGradeInput, staffUncheckedCreateWithoutGradeInput>
    connectOrCreate?: staffCreateOrConnectWithoutGradeInput
    upsert?: staffUpsertWithoutGradeInput
    connect?: staffWhereUniqueInput
    update?: XOR<XOR<staffUpdateToOneWithWhereWithoutGradeInput, staffUpdateWithoutGradeInput>, staffUncheckedUpdateWithoutGradeInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type staffCreateWithoutProjectgroup_projectgroup_convenerstaffidTostaffInput = {
    staffname: string
    phone?: string | null
    email: string
    password: string
    role?: string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    profileimage?: string | null
    projectgroup_projectgroup_expertstaffidTostaff?: projectgroupCreateNestedManyWithoutStaff_projectgroup_expertstaffidTostaffInput
    projectmeeting?: projectmeetingCreateNestedManyWithoutStaffInput
    staff?: staffCreateNestedOneWithoutOther_staffInput
    other_staff?: staffCreateNestedManyWithoutStaffInput
    student?: studentCreateNestedManyWithoutStaffInput
    grouprequest?: grouprequestCreateNestedManyWithoutApproverInput
    grade?: gradeCreateNestedManyWithoutStaffInput
  }

  export type staffUncheckedCreateWithoutProjectgroup_projectgroup_convenerstaffidTostaffInput = {
    staffid?: number
    staffname: string
    phone?: string | null
    email: string
    password: string
    role?: string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    registeredby?: number | null
    profileimage?: string | null
    projectgroup_projectgroup_expertstaffidTostaff?: projectgroupUncheckedCreateNestedManyWithoutStaff_projectgroup_expertstaffidTostaffInput
    projectmeeting?: projectmeetingUncheckedCreateNestedManyWithoutStaffInput
    other_staff?: staffUncheckedCreateNestedManyWithoutStaffInput
    student?: studentUncheckedCreateNestedManyWithoutStaffInput
    grouprequest?: grouprequestUncheckedCreateNestedManyWithoutApproverInput
    grade?: gradeUncheckedCreateNestedManyWithoutStaffInput
  }

  export type staffCreateOrConnectWithoutProjectgroup_projectgroup_convenerstaffidTostaffInput = {
    where: staffWhereUniqueInput
    create: XOR<staffCreateWithoutProjectgroup_projectgroup_convenerstaffidTostaffInput, staffUncheckedCreateWithoutProjectgroup_projectgroup_convenerstaffidTostaffInput>
  }

  export type staffCreateWithoutProjectgroup_projectgroup_expertstaffidTostaffInput = {
    staffname: string
    phone?: string | null
    email: string
    password: string
    role?: string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    profileimage?: string | null
    projectgroup_projectgroup_convenerstaffidTostaff?: projectgroupCreateNestedManyWithoutStaff_projectgroup_convenerstaffidTostaffInput
    projectmeeting?: projectmeetingCreateNestedManyWithoutStaffInput
    staff?: staffCreateNestedOneWithoutOther_staffInput
    other_staff?: staffCreateNestedManyWithoutStaffInput
    student?: studentCreateNestedManyWithoutStaffInput
    grouprequest?: grouprequestCreateNestedManyWithoutApproverInput
    grade?: gradeCreateNestedManyWithoutStaffInput
  }

  export type staffUncheckedCreateWithoutProjectgroup_projectgroup_expertstaffidTostaffInput = {
    staffid?: number
    staffname: string
    phone?: string | null
    email: string
    password: string
    role?: string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    registeredby?: number | null
    profileimage?: string | null
    projectgroup_projectgroup_convenerstaffidTostaff?: projectgroupUncheckedCreateNestedManyWithoutStaff_projectgroup_convenerstaffidTostaffInput
    projectmeeting?: projectmeetingUncheckedCreateNestedManyWithoutStaffInput
    other_staff?: staffUncheckedCreateNestedManyWithoutStaffInput
    student?: studentUncheckedCreateNestedManyWithoutStaffInput
    grouprequest?: grouprequestUncheckedCreateNestedManyWithoutApproverInput
    grade?: gradeUncheckedCreateNestedManyWithoutStaffInput
  }

  export type staffCreateOrConnectWithoutProjectgroup_projectgroup_expertstaffidTostaffInput = {
    where: staffWhereUniqueInput
    create: XOR<staffCreateWithoutProjectgroup_projectgroup_expertstaffidTostaffInput, staffUncheckedCreateWithoutProjectgroup_projectgroup_expertstaffidTostaffInput>
  }

  export type projecttypeCreateWithoutProjectgroupInput = {
    projecttypename: string
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
  }

  export type projecttypeUncheckedCreateWithoutProjectgroupInput = {
    projecttypeid?: number
    projecttypename: string
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
  }

  export type projecttypeCreateOrConnectWithoutProjectgroupInput = {
    where: projecttypeWhereUniqueInput
    create: XOR<projecttypeCreateWithoutProjectgroupInput, projecttypeUncheckedCreateWithoutProjectgroupInput>
  }

  export type projectgroupmemberCreateWithoutProjectgroupInput = {
    isgroupleader?: boolean | null
    studentcgpa?: number | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    student?: studentCreateNestedOneWithoutProjectgroupmemberInput
  }

  export type projectgroupmemberUncheckedCreateWithoutProjectgroupInput = {
    projectgroupmemberid?: number
    isgroupleader?: boolean | null
    studentcgpa?: number | null
    studentid?: number | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
  }

  export type projectgroupmemberCreateOrConnectWithoutProjectgroupInput = {
    where: projectgroupmemberWhereUniqueInput
    create: XOR<projectgroupmemberCreateWithoutProjectgroupInput, projectgroupmemberUncheckedCreateWithoutProjectgroupInput>
  }

  export type projectgroupmemberCreateManyProjectgroupInputEnvelope = {
    data: projectgroupmemberCreateManyProjectgroupInput | projectgroupmemberCreateManyProjectgroupInput[]
    skipDuplicates?: boolean
  }

  export type projectmeetingCreateWithoutProjectgroupInput = {
    meetingdatetime?: Date | string | null
    meetingpurpose?: string | null
    meetinglocation?: string | null
    meetingnotes?: string | null
    meetingstatus?: string | null
    meetingstatusdescription?: string | null
    meetingstatusdatetime?: Date | string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    staff?: staffCreateNestedOneWithoutProjectmeetingInput
    projectmeetingattendance?: projectmeetingattendanceCreateNestedManyWithoutProjectmeetingInput
  }

  export type projectmeetingUncheckedCreateWithoutProjectgroupInput = {
    projectmeetingid?: number
    guidestaffid?: number | null
    meetingdatetime?: Date | string | null
    meetingpurpose?: string | null
    meetinglocation?: string | null
    meetingnotes?: string | null
    meetingstatus?: string | null
    meetingstatusdescription?: string | null
    meetingstatusdatetime?: Date | string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    projectmeetingattendance?: projectmeetingattendanceUncheckedCreateNestedManyWithoutProjectmeetingInput
  }

  export type projectmeetingCreateOrConnectWithoutProjectgroupInput = {
    where: projectmeetingWhereUniqueInput
    create: XOR<projectmeetingCreateWithoutProjectgroupInput, projectmeetingUncheckedCreateWithoutProjectgroupInput>
  }

  export type projectmeetingCreateManyProjectgroupInputEnvelope = {
    data: projectmeetingCreateManyProjectgroupInput | projectmeetingCreateManyProjectgroupInput[]
    skipDuplicates?: boolean
  }

  export type gradeCreateWithoutProjectgroupInput = {
    component: string
    marks: number
    maxmarks: number
    feedback?: string | null
    gradedat?: Date | string
    created?: Date | string
    modified?: Date | string
    staff: staffCreateNestedOneWithoutGradeInput
  }

  export type gradeUncheckedCreateWithoutProjectgroupInput = {
    gradeid?: number
    facultyid: number
    component: string
    marks: number
    maxmarks: number
    feedback?: string | null
    gradedat?: Date | string
    created?: Date | string
    modified?: Date | string
  }

  export type gradeCreateOrConnectWithoutProjectgroupInput = {
    where: gradeWhereUniqueInput
    create: XOR<gradeCreateWithoutProjectgroupInput, gradeUncheckedCreateWithoutProjectgroupInput>
  }

  export type gradeCreateManyProjectgroupInputEnvelope = {
    data: gradeCreateManyProjectgroupInput | gradeCreateManyProjectgroupInput[]
    skipDuplicates?: boolean
  }

  export type staffUpsertWithoutProjectgroup_projectgroup_convenerstaffidTostaffInput = {
    update: XOR<staffUpdateWithoutProjectgroup_projectgroup_convenerstaffidTostaffInput, staffUncheckedUpdateWithoutProjectgroup_projectgroup_convenerstaffidTostaffInput>
    create: XOR<staffCreateWithoutProjectgroup_projectgroup_convenerstaffidTostaffInput, staffUncheckedCreateWithoutProjectgroup_projectgroup_convenerstaffidTostaffInput>
    where?: staffWhereInput
  }

  export type staffUpdateToOneWithWhereWithoutProjectgroup_projectgroup_convenerstaffidTostaffInput = {
    where?: staffWhereInput
    data: XOR<staffUpdateWithoutProjectgroup_projectgroup_convenerstaffidTostaffInput, staffUncheckedUpdateWithoutProjectgroup_projectgroup_convenerstaffidTostaffInput>
  }

  export type staffUpdateWithoutProjectgroup_projectgroup_convenerstaffidTostaffInput = {
    staffname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileimage?: NullableStringFieldUpdateOperationsInput | string | null
    projectgroup_projectgroup_expertstaffidTostaff?: projectgroupUpdateManyWithoutStaff_projectgroup_expertstaffidTostaffNestedInput
    projectmeeting?: projectmeetingUpdateManyWithoutStaffNestedInput
    staff?: staffUpdateOneWithoutOther_staffNestedInput
    other_staff?: staffUpdateManyWithoutStaffNestedInput
    student?: studentUpdateManyWithoutStaffNestedInput
    grouprequest?: grouprequestUpdateManyWithoutApproverNestedInput
    grade?: gradeUpdateManyWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateWithoutProjectgroup_projectgroup_convenerstaffidTostaffInput = {
    staffid?: IntFieldUpdateOperationsInput | number
    staffname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registeredby?: NullableIntFieldUpdateOperationsInput | number | null
    profileimage?: NullableStringFieldUpdateOperationsInput | string | null
    projectgroup_projectgroup_expertstaffidTostaff?: projectgroupUncheckedUpdateManyWithoutStaff_projectgroup_expertstaffidTostaffNestedInput
    projectmeeting?: projectmeetingUncheckedUpdateManyWithoutStaffNestedInput
    other_staff?: staffUncheckedUpdateManyWithoutStaffNestedInput
    student?: studentUncheckedUpdateManyWithoutStaffNestedInput
    grouprequest?: grouprequestUncheckedUpdateManyWithoutApproverNestedInput
    grade?: gradeUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type staffUpsertWithoutProjectgroup_projectgroup_expertstaffidTostaffInput = {
    update: XOR<staffUpdateWithoutProjectgroup_projectgroup_expertstaffidTostaffInput, staffUncheckedUpdateWithoutProjectgroup_projectgroup_expertstaffidTostaffInput>
    create: XOR<staffCreateWithoutProjectgroup_projectgroup_expertstaffidTostaffInput, staffUncheckedCreateWithoutProjectgroup_projectgroup_expertstaffidTostaffInput>
    where?: staffWhereInput
  }

  export type staffUpdateToOneWithWhereWithoutProjectgroup_projectgroup_expertstaffidTostaffInput = {
    where?: staffWhereInput
    data: XOR<staffUpdateWithoutProjectgroup_projectgroup_expertstaffidTostaffInput, staffUncheckedUpdateWithoutProjectgroup_projectgroup_expertstaffidTostaffInput>
  }

  export type staffUpdateWithoutProjectgroup_projectgroup_expertstaffidTostaffInput = {
    staffname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileimage?: NullableStringFieldUpdateOperationsInput | string | null
    projectgroup_projectgroup_convenerstaffidTostaff?: projectgroupUpdateManyWithoutStaff_projectgroup_convenerstaffidTostaffNestedInput
    projectmeeting?: projectmeetingUpdateManyWithoutStaffNestedInput
    staff?: staffUpdateOneWithoutOther_staffNestedInput
    other_staff?: staffUpdateManyWithoutStaffNestedInput
    student?: studentUpdateManyWithoutStaffNestedInput
    grouprequest?: grouprequestUpdateManyWithoutApproverNestedInput
    grade?: gradeUpdateManyWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateWithoutProjectgroup_projectgroup_expertstaffidTostaffInput = {
    staffid?: IntFieldUpdateOperationsInput | number
    staffname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registeredby?: NullableIntFieldUpdateOperationsInput | number | null
    profileimage?: NullableStringFieldUpdateOperationsInput | string | null
    projectgroup_projectgroup_convenerstaffidTostaff?: projectgroupUncheckedUpdateManyWithoutStaff_projectgroup_convenerstaffidTostaffNestedInput
    projectmeeting?: projectmeetingUncheckedUpdateManyWithoutStaffNestedInput
    other_staff?: staffUncheckedUpdateManyWithoutStaffNestedInput
    student?: studentUncheckedUpdateManyWithoutStaffNestedInput
    grouprequest?: grouprequestUncheckedUpdateManyWithoutApproverNestedInput
    grade?: gradeUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type projecttypeUpsertWithoutProjectgroupInput = {
    update: XOR<projecttypeUpdateWithoutProjectgroupInput, projecttypeUncheckedUpdateWithoutProjectgroupInput>
    create: XOR<projecttypeCreateWithoutProjectgroupInput, projecttypeUncheckedCreateWithoutProjectgroupInput>
    where?: projecttypeWhereInput
  }

  export type projecttypeUpdateToOneWithWhereWithoutProjectgroupInput = {
    where?: projecttypeWhereInput
    data: XOR<projecttypeUpdateWithoutProjectgroupInput, projecttypeUncheckedUpdateWithoutProjectgroupInput>
  }

  export type projecttypeUpdateWithoutProjectgroupInput = {
    projecttypename?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projecttypeUncheckedUpdateWithoutProjectgroupInput = {
    projecttypeid?: IntFieldUpdateOperationsInput | number
    projecttypename?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectgroupmemberUpsertWithWhereUniqueWithoutProjectgroupInput = {
    where: projectgroupmemberWhereUniqueInput
    update: XOR<projectgroupmemberUpdateWithoutProjectgroupInput, projectgroupmemberUncheckedUpdateWithoutProjectgroupInput>
    create: XOR<projectgroupmemberCreateWithoutProjectgroupInput, projectgroupmemberUncheckedCreateWithoutProjectgroupInput>
  }

  export type projectgroupmemberUpdateWithWhereUniqueWithoutProjectgroupInput = {
    where: projectgroupmemberWhereUniqueInput
    data: XOR<projectgroupmemberUpdateWithoutProjectgroupInput, projectgroupmemberUncheckedUpdateWithoutProjectgroupInput>
  }

  export type projectgroupmemberUpdateManyWithWhereWithoutProjectgroupInput = {
    where: projectgroupmemberScalarWhereInput
    data: XOR<projectgroupmemberUpdateManyMutationInput, projectgroupmemberUncheckedUpdateManyWithoutProjectgroupInput>
  }

  export type projectgroupmemberScalarWhereInput = {
    AND?: projectgroupmemberScalarWhereInput | projectgroupmemberScalarWhereInput[]
    OR?: projectgroupmemberScalarWhereInput[]
    NOT?: projectgroupmemberScalarWhereInput | projectgroupmemberScalarWhereInput[]
    projectgroupmemberid?: IntFilter<"projectgroupmember"> | number
    isgroupleader?: BoolNullableFilter<"projectgroupmember"> | boolean | null
    studentcgpa?: FloatNullableFilter<"projectgroupmember"> | number | null
    projectgroupid?: IntNullableFilter<"projectgroupmember"> | number | null
    studentid?: IntNullableFilter<"projectgroupmember"> | number | null
    description?: StringNullableFilter<"projectgroupmember"> | string | null
    created?: DateTimeNullableFilter<"projectgroupmember"> | Date | string | null
    modified?: DateTimeNullableFilter<"projectgroupmember"> | Date | string | null
  }

  export type projectmeetingUpsertWithWhereUniqueWithoutProjectgroupInput = {
    where: projectmeetingWhereUniqueInput
    update: XOR<projectmeetingUpdateWithoutProjectgroupInput, projectmeetingUncheckedUpdateWithoutProjectgroupInput>
    create: XOR<projectmeetingCreateWithoutProjectgroupInput, projectmeetingUncheckedCreateWithoutProjectgroupInput>
  }

  export type projectmeetingUpdateWithWhereUniqueWithoutProjectgroupInput = {
    where: projectmeetingWhereUniqueInput
    data: XOR<projectmeetingUpdateWithoutProjectgroupInput, projectmeetingUncheckedUpdateWithoutProjectgroupInput>
  }

  export type projectmeetingUpdateManyWithWhereWithoutProjectgroupInput = {
    where: projectmeetingScalarWhereInput
    data: XOR<projectmeetingUpdateManyMutationInput, projectmeetingUncheckedUpdateManyWithoutProjectgroupInput>
  }

  export type projectmeetingScalarWhereInput = {
    AND?: projectmeetingScalarWhereInput | projectmeetingScalarWhereInput[]
    OR?: projectmeetingScalarWhereInput[]
    NOT?: projectmeetingScalarWhereInput | projectmeetingScalarWhereInput[]
    projectmeetingid?: IntFilter<"projectmeeting"> | number
    projectgroupid?: IntNullableFilter<"projectmeeting"> | number | null
    guidestaffid?: IntNullableFilter<"projectmeeting"> | number | null
    meetingdatetime?: DateTimeNullableFilter<"projectmeeting"> | Date | string | null
    meetingpurpose?: StringNullableFilter<"projectmeeting"> | string | null
    meetinglocation?: StringNullableFilter<"projectmeeting"> | string | null
    meetingnotes?: StringNullableFilter<"projectmeeting"> | string | null
    meetingstatus?: StringNullableFilter<"projectmeeting"> | string | null
    meetingstatusdescription?: StringNullableFilter<"projectmeeting"> | string | null
    meetingstatusdatetime?: DateTimeNullableFilter<"projectmeeting"> | Date | string | null
    description?: StringNullableFilter<"projectmeeting"> | string | null
    created?: DateTimeNullableFilter<"projectmeeting"> | Date | string | null
    modified?: DateTimeNullableFilter<"projectmeeting"> | Date | string | null
  }

  export type gradeUpsertWithWhereUniqueWithoutProjectgroupInput = {
    where: gradeWhereUniqueInput
    update: XOR<gradeUpdateWithoutProjectgroupInput, gradeUncheckedUpdateWithoutProjectgroupInput>
    create: XOR<gradeCreateWithoutProjectgroupInput, gradeUncheckedCreateWithoutProjectgroupInput>
  }

  export type gradeUpdateWithWhereUniqueWithoutProjectgroupInput = {
    where: gradeWhereUniqueInput
    data: XOR<gradeUpdateWithoutProjectgroupInput, gradeUncheckedUpdateWithoutProjectgroupInput>
  }

  export type gradeUpdateManyWithWhereWithoutProjectgroupInput = {
    where: gradeScalarWhereInput
    data: XOR<gradeUpdateManyMutationInput, gradeUncheckedUpdateManyWithoutProjectgroupInput>
  }

  export type gradeScalarWhereInput = {
    AND?: gradeScalarWhereInput | gradeScalarWhereInput[]
    OR?: gradeScalarWhereInput[]
    NOT?: gradeScalarWhereInput | gradeScalarWhereInput[]
    gradeid?: IntFilter<"grade"> | number
    projectgroupid?: IntFilter<"grade"> | number
    facultyid?: IntFilter<"grade"> | number
    component?: StringFilter<"grade"> | string
    marks?: FloatFilter<"grade"> | number
    maxmarks?: FloatFilter<"grade"> | number
    feedback?: StringNullableFilter<"grade"> | string | null
    gradedat?: DateTimeFilter<"grade"> | Date | string
    created?: DateTimeFilter<"grade"> | Date | string
    modified?: DateTimeFilter<"grade"> | Date | string
  }

  export type studentCreateWithoutGrouprequestInput = {
    studentname: string
    phone?: string | null
    email: string
    password: string
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    profileimage?: string | null
    projectgroupmember?: projectgroupmemberCreateNestedManyWithoutStudentInput
    projectmeetingattendance?: projectmeetingattendanceCreateNestedManyWithoutStudentInput
    staff?: staffCreateNestedOneWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutGrouprequestInput = {
    studentid?: number
    studentname: string
    phone?: string | null
    email: string
    password: string
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    registeredby?: number | null
    profileimage?: string | null
    projectgroupmember?: projectgroupmemberUncheckedCreateNestedManyWithoutStudentInput
    projectmeetingattendance?: projectmeetingattendanceUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutGrouprequestInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutGrouprequestInput, studentUncheckedCreateWithoutGrouprequestInput>
  }

  export type staffCreateWithoutGrouprequestInput = {
    staffname: string
    phone?: string | null
    email: string
    password: string
    role?: string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    profileimage?: string | null
    projectgroup_projectgroup_convenerstaffidTostaff?: projectgroupCreateNestedManyWithoutStaff_projectgroup_convenerstaffidTostaffInput
    projectgroup_projectgroup_expertstaffidTostaff?: projectgroupCreateNestedManyWithoutStaff_projectgroup_expertstaffidTostaffInput
    projectmeeting?: projectmeetingCreateNestedManyWithoutStaffInput
    staff?: staffCreateNestedOneWithoutOther_staffInput
    other_staff?: staffCreateNestedManyWithoutStaffInput
    student?: studentCreateNestedManyWithoutStaffInput
    grade?: gradeCreateNestedManyWithoutStaffInput
  }

  export type staffUncheckedCreateWithoutGrouprequestInput = {
    staffid?: number
    staffname: string
    phone?: string | null
    email: string
    password: string
    role?: string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    registeredby?: number | null
    profileimage?: string | null
    projectgroup_projectgroup_convenerstaffidTostaff?: projectgroupUncheckedCreateNestedManyWithoutStaff_projectgroup_convenerstaffidTostaffInput
    projectgroup_projectgroup_expertstaffidTostaff?: projectgroupUncheckedCreateNestedManyWithoutStaff_projectgroup_expertstaffidTostaffInput
    projectmeeting?: projectmeetingUncheckedCreateNestedManyWithoutStaffInput
    other_staff?: staffUncheckedCreateNestedManyWithoutStaffInput
    student?: studentUncheckedCreateNestedManyWithoutStaffInput
    grade?: gradeUncheckedCreateNestedManyWithoutStaffInput
  }

  export type staffCreateOrConnectWithoutGrouprequestInput = {
    where: staffWhereUniqueInput
    create: XOR<staffCreateWithoutGrouprequestInput, staffUncheckedCreateWithoutGrouprequestInput>
  }

  export type studentUpsertWithoutGrouprequestInput = {
    update: XOR<studentUpdateWithoutGrouprequestInput, studentUncheckedUpdateWithoutGrouprequestInput>
    create: XOR<studentCreateWithoutGrouprequestInput, studentUncheckedCreateWithoutGrouprequestInput>
    where?: studentWhereInput
  }

  export type studentUpdateToOneWithWhereWithoutGrouprequestInput = {
    where?: studentWhereInput
    data: XOR<studentUpdateWithoutGrouprequestInput, studentUncheckedUpdateWithoutGrouprequestInput>
  }

  export type studentUpdateWithoutGrouprequestInput = {
    studentname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileimage?: NullableStringFieldUpdateOperationsInput | string | null
    projectgroupmember?: projectgroupmemberUpdateManyWithoutStudentNestedInput
    projectmeetingattendance?: projectmeetingattendanceUpdateManyWithoutStudentNestedInput
    staff?: staffUpdateOneWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutGrouprequestInput = {
    studentid?: IntFieldUpdateOperationsInput | number
    studentname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registeredby?: NullableIntFieldUpdateOperationsInput | number | null
    profileimage?: NullableStringFieldUpdateOperationsInput | string | null
    projectgroupmember?: projectgroupmemberUncheckedUpdateManyWithoutStudentNestedInput
    projectmeetingattendance?: projectmeetingattendanceUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type staffUpsertWithoutGrouprequestInput = {
    update: XOR<staffUpdateWithoutGrouprequestInput, staffUncheckedUpdateWithoutGrouprequestInput>
    create: XOR<staffCreateWithoutGrouprequestInput, staffUncheckedCreateWithoutGrouprequestInput>
    where?: staffWhereInput
  }

  export type staffUpdateToOneWithWhereWithoutGrouprequestInput = {
    where?: staffWhereInput
    data: XOR<staffUpdateWithoutGrouprequestInput, staffUncheckedUpdateWithoutGrouprequestInput>
  }

  export type staffUpdateWithoutGrouprequestInput = {
    staffname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileimage?: NullableStringFieldUpdateOperationsInput | string | null
    projectgroup_projectgroup_convenerstaffidTostaff?: projectgroupUpdateManyWithoutStaff_projectgroup_convenerstaffidTostaffNestedInput
    projectgroup_projectgroup_expertstaffidTostaff?: projectgroupUpdateManyWithoutStaff_projectgroup_expertstaffidTostaffNestedInput
    projectmeeting?: projectmeetingUpdateManyWithoutStaffNestedInput
    staff?: staffUpdateOneWithoutOther_staffNestedInput
    other_staff?: staffUpdateManyWithoutStaffNestedInput
    student?: studentUpdateManyWithoutStaffNestedInput
    grade?: gradeUpdateManyWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateWithoutGrouprequestInput = {
    staffid?: IntFieldUpdateOperationsInput | number
    staffname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registeredby?: NullableIntFieldUpdateOperationsInput | number | null
    profileimage?: NullableStringFieldUpdateOperationsInput | string | null
    projectgroup_projectgroup_convenerstaffidTostaff?: projectgroupUncheckedUpdateManyWithoutStaff_projectgroup_convenerstaffidTostaffNestedInput
    projectgroup_projectgroup_expertstaffidTostaff?: projectgroupUncheckedUpdateManyWithoutStaff_projectgroup_expertstaffidTostaffNestedInput
    projectmeeting?: projectmeetingUncheckedUpdateManyWithoutStaffNestedInput
    other_staff?: staffUncheckedUpdateManyWithoutStaffNestedInput
    student?: studentUncheckedUpdateManyWithoutStaffNestedInput
    grade?: gradeUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type projectgroupCreateWithoutProjectgroupmemberInput = {
    projectgroupname?: string | null
    projecttitle?: string | null
    projectarea?: string | null
    projectdescription?: string | null
    averagecpi?: number | null
    description?: string | null
    status?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    staff_projectgroup_convenerstaffidTostaff?: staffCreateNestedOneWithoutProjectgroup_projectgroup_convenerstaffidTostaffInput
    staff_projectgroup_expertstaffidTostaff?: staffCreateNestedOneWithoutProjectgroup_projectgroup_expertstaffidTostaffInput
    projecttype?: projecttypeCreateNestedOneWithoutProjectgroupInput
    projectmeeting?: projectmeetingCreateNestedManyWithoutProjectgroupInput
    grade?: gradeCreateNestedManyWithoutProjectgroupInput
  }

  export type projectgroupUncheckedCreateWithoutProjectgroupmemberInput = {
    projectgroupid?: number
    projecttypeid?: number | null
    projectgroupname?: string | null
    projecttitle?: string | null
    projectarea?: string | null
    projectdescription?: string | null
    averagecpi?: number | null
    description?: string | null
    convenerstaffid?: number | null
    expertstaffid?: number | null
    status?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    projectmeeting?: projectmeetingUncheckedCreateNestedManyWithoutProjectgroupInput
    grade?: gradeUncheckedCreateNestedManyWithoutProjectgroupInput
  }

  export type projectgroupCreateOrConnectWithoutProjectgroupmemberInput = {
    where: projectgroupWhereUniqueInput
    create: XOR<projectgroupCreateWithoutProjectgroupmemberInput, projectgroupUncheckedCreateWithoutProjectgroupmemberInput>
  }

  export type studentCreateWithoutProjectgroupmemberInput = {
    studentname: string
    phone?: string | null
    email: string
    password: string
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    profileimage?: string | null
    projectmeetingattendance?: projectmeetingattendanceCreateNestedManyWithoutStudentInput
    staff?: staffCreateNestedOneWithoutStudentInput
    grouprequest?: grouprequestCreateNestedManyWithoutLeaderInput
  }

  export type studentUncheckedCreateWithoutProjectgroupmemberInput = {
    studentid?: number
    studentname: string
    phone?: string | null
    email: string
    password: string
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    registeredby?: number | null
    profileimage?: string | null
    projectmeetingattendance?: projectmeetingattendanceUncheckedCreateNestedManyWithoutStudentInput
    grouprequest?: grouprequestUncheckedCreateNestedManyWithoutLeaderInput
  }

  export type studentCreateOrConnectWithoutProjectgroupmemberInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutProjectgroupmemberInput, studentUncheckedCreateWithoutProjectgroupmemberInput>
  }

  export type projectgroupUpsertWithoutProjectgroupmemberInput = {
    update: XOR<projectgroupUpdateWithoutProjectgroupmemberInput, projectgroupUncheckedUpdateWithoutProjectgroupmemberInput>
    create: XOR<projectgroupCreateWithoutProjectgroupmemberInput, projectgroupUncheckedCreateWithoutProjectgroupmemberInput>
    where?: projectgroupWhereInput
  }

  export type projectgroupUpdateToOneWithWhereWithoutProjectgroupmemberInput = {
    where?: projectgroupWhereInput
    data: XOR<projectgroupUpdateWithoutProjectgroupmemberInput, projectgroupUncheckedUpdateWithoutProjectgroupmemberInput>
  }

  export type projectgroupUpdateWithoutProjectgroupmemberInput = {
    projectgroupname?: NullableStringFieldUpdateOperationsInput | string | null
    projecttitle?: NullableStringFieldUpdateOperationsInput | string | null
    projectarea?: NullableStringFieldUpdateOperationsInput | string | null
    projectdescription?: NullableStringFieldUpdateOperationsInput | string | null
    averagecpi?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staff_projectgroup_convenerstaffidTostaff?: staffUpdateOneWithoutProjectgroup_projectgroup_convenerstaffidTostaffNestedInput
    staff_projectgroup_expertstaffidTostaff?: staffUpdateOneWithoutProjectgroup_projectgroup_expertstaffidTostaffNestedInput
    projecttype?: projecttypeUpdateOneWithoutProjectgroupNestedInput
    projectmeeting?: projectmeetingUpdateManyWithoutProjectgroupNestedInput
    grade?: gradeUpdateManyWithoutProjectgroupNestedInput
  }

  export type projectgroupUncheckedUpdateWithoutProjectgroupmemberInput = {
    projectgroupid?: IntFieldUpdateOperationsInput | number
    projecttypeid?: NullableIntFieldUpdateOperationsInput | number | null
    projectgroupname?: NullableStringFieldUpdateOperationsInput | string | null
    projecttitle?: NullableStringFieldUpdateOperationsInput | string | null
    projectarea?: NullableStringFieldUpdateOperationsInput | string | null
    projectdescription?: NullableStringFieldUpdateOperationsInput | string | null
    averagecpi?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    convenerstaffid?: NullableIntFieldUpdateOperationsInput | number | null
    expertstaffid?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projectmeeting?: projectmeetingUncheckedUpdateManyWithoutProjectgroupNestedInput
    grade?: gradeUncheckedUpdateManyWithoutProjectgroupNestedInput
  }

  export type studentUpsertWithoutProjectgroupmemberInput = {
    update: XOR<studentUpdateWithoutProjectgroupmemberInput, studentUncheckedUpdateWithoutProjectgroupmemberInput>
    create: XOR<studentCreateWithoutProjectgroupmemberInput, studentUncheckedCreateWithoutProjectgroupmemberInput>
    where?: studentWhereInput
  }

  export type studentUpdateToOneWithWhereWithoutProjectgroupmemberInput = {
    where?: studentWhereInput
    data: XOR<studentUpdateWithoutProjectgroupmemberInput, studentUncheckedUpdateWithoutProjectgroupmemberInput>
  }

  export type studentUpdateWithoutProjectgroupmemberInput = {
    studentname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileimage?: NullableStringFieldUpdateOperationsInput | string | null
    projectmeetingattendance?: projectmeetingattendanceUpdateManyWithoutStudentNestedInput
    staff?: staffUpdateOneWithoutStudentNestedInput
    grouprequest?: grouprequestUpdateManyWithoutLeaderNestedInput
  }

  export type studentUncheckedUpdateWithoutProjectgroupmemberInput = {
    studentid?: IntFieldUpdateOperationsInput | number
    studentname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registeredby?: NullableIntFieldUpdateOperationsInput | number | null
    profileimage?: NullableStringFieldUpdateOperationsInput | string | null
    projectmeetingattendance?: projectmeetingattendanceUncheckedUpdateManyWithoutStudentNestedInput
    grouprequest?: grouprequestUncheckedUpdateManyWithoutLeaderNestedInput
  }

  export type staffCreateWithoutProjectmeetingInput = {
    staffname: string
    phone?: string | null
    email: string
    password: string
    role?: string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    profileimage?: string | null
    projectgroup_projectgroup_convenerstaffidTostaff?: projectgroupCreateNestedManyWithoutStaff_projectgroup_convenerstaffidTostaffInput
    projectgroup_projectgroup_expertstaffidTostaff?: projectgroupCreateNestedManyWithoutStaff_projectgroup_expertstaffidTostaffInput
    staff?: staffCreateNestedOneWithoutOther_staffInput
    other_staff?: staffCreateNestedManyWithoutStaffInput
    student?: studentCreateNestedManyWithoutStaffInput
    grouprequest?: grouprequestCreateNestedManyWithoutApproverInput
    grade?: gradeCreateNestedManyWithoutStaffInput
  }

  export type staffUncheckedCreateWithoutProjectmeetingInput = {
    staffid?: number
    staffname: string
    phone?: string | null
    email: string
    password: string
    role?: string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    registeredby?: number | null
    profileimage?: string | null
    projectgroup_projectgroup_convenerstaffidTostaff?: projectgroupUncheckedCreateNestedManyWithoutStaff_projectgroup_convenerstaffidTostaffInput
    projectgroup_projectgroup_expertstaffidTostaff?: projectgroupUncheckedCreateNestedManyWithoutStaff_projectgroup_expertstaffidTostaffInput
    other_staff?: staffUncheckedCreateNestedManyWithoutStaffInput
    student?: studentUncheckedCreateNestedManyWithoutStaffInput
    grouprequest?: grouprequestUncheckedCreateNestedManyWithoutApproverInput
    grade?: gradeUncheckedCreateNestedManyWithoutStaffInput
  }

  export type staffCreateOrConnectWithoutProjectmeetingInput = {
    where: staffWhereUniqueInput
    create: XOR<staffCreateWithoutProjectmeetingInput, staffUncheckedCreateWithoutProjectmeetingInput>
  }

  export type projectgroupCreateWithoutProjectmeetingInput = {
    projectgroupname?: string | null
    projecttitle?: string | null
    projectarea?: string | null
    projectdescription?: string | null
    averagecpi?: number | null
    description?: string | null
    status?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    staff_projectgroup_convenerstaffidTostaff?: staffCreateNestedOneWithoutProjectgroup_projectgroup_convenerstaffidTostaffInput
    staff_projectgroup_expertstaffidTostaff?: staffCreateNestedOneWithoutProjectgroup_projectgroup_expertstaffidTostaffInput
    projecttype?: projecttypeCreateNestedOneWithoutProjectgroupInput
    projectgroupmember?: projectgroupmemberCreateNestedManyWithoutProjectgroupInput
    grade?: gradeCreateNestedManyWithoutProjectgroupInput
  }

  export type projectgroupUncheckedCreateWithoutProjectmeetingInput = {
    projectgroupid?: number
    projecttypeid?: number | null
    projectgroupname?: string | null
    projecttitle?: string | null
    projectarea?: string | null
    projectdescription?: string | null
    averagecpi?: number | null
    description?: string | null
    convenerstaffid?: number | null
    expertstaffid?: number | null
    status?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    projectgroupmember?: projectgroupmemberUncheckedCreateNestedManyWithoutProjectgroupInput
    grade?: gradeUncheckedCreateNestedManyWithoutProjectgroupInput
  }

  export type projectgroupCreateOrConnectWithoutProjectmeetingInput = {
    where: projectgroupWhereUniqueInput
    create: XOR<projectgroupCreateWithoutProjectmeetingInput, projectgroupUncheckedCreateWithoutProjectmeetingInput>
  }

  export type projectmeetingattendanceCreateWithoutProjectmeetingInput = {
    ispresent?: boolean | null
    attendanceremarks?: string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    student?: studentCreateNestedOneWithoutProjectmeetingattendanceInput
  }

  export type projectmeetingattendanceUncheckedCreateWithoutProjectmeetingInput = {
    projectmeetingattendanceid?: number
    studentid?: number | null
    ispresent?: boolean | null
    attendanceremarks?: string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
  }

  export type projectmeetingattendanceCreateOrConnectWithoutProjectmeetingInput = {
    where: projectmeetingattendanceWhereUniqueInput
    create: XOR<projectmeetingattendanceCreateWithoutProjectmeetingInput, projectmeetingattendanceUncheckedCreateWithoutProjectmeetingInput>
  }

  export type projectmeetingattendanceCreateManyProjectmeetingInputEnvelope = {
    data: projectmeetingattendanceCreateManyProjectmeetingInput | projectmeetingattendanceCreateManyProjectmeetingInput[]
    skipDuplicates?: boolean
  }

  export type staffUpsertWithoutProjectmeetingInput = {
    update: XOR<staffUpdateWithoutProjectmeetingInput, staffUncheckedUpdateWithoutProjectmeetingInput>
    create: XOR<staffCreateWithoutProjectmeetingInput, staffUncheckedCreateWithoutProjectmeetingInput>
    where?: staffWhereInput
  }

  export type staffUpdateToOneWithWhereWithoutProjectmeetingInput = {
    where?: staffWhereInput
    data: XOR<staffUpdateWithoutProjectmeetingInput, staffUncheckedUpdateWithoutProjectmeetingInput>
  }

  export type staffUpdateWithoutProjectmeetingInput = {
    staffname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileimage?: NullableStringFieldUpdateOperationsInput | string | null
    projectgroup_projectgroup_convenerstaffidTostaff?: projectgroupUpdateManyWithoutStaff_projectgroup_convenerstaffidTostaffNestedInput
    projectgroup_projectgroup_expertstaffidTostaff?: projectgroupUpdateManyWithoutStaff_projectgroup_expertstaffidTostaffNestedInput
    staff?: staffUpdateOneWithoutOther_staffNestedInput
    other_staff?: staffUpdateManyWithoutStaffNestedInput
    student?: studentUpdateManyWithoutStaffNestedInput
    grouprequest?: grouprequestUpdateManyWithoutApproverNestedInput
    grade?: gradeUpdateManyWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateWithoutProjectmeetingInput = {
    staffid?: IntFieldUpdateOperationsInput | number
    staffname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registeredby?: NullableIntFieldUpdateOperationsInput | number | null
    profileimage?: NullableStringFieldUpdateOperationsInput | string | null
    projectgroup_projectgroup_convenerstaffidTostaff?: projectgroupUncheckedUpdateManyWithoutStaff_projectgroup_convenerstaffidTostaffNestedInput
    projectgroup_projectgroup_expertstaffidTostaff?: projectgroupUncheckedUpdateManyWithoutStaff_projectgroup_expertstaffidTostaffNestedInput
    other_staff?: staffUncheckedUpdateManyWithoutStaffNestedInput
    student?: studentUncheckedUpdateManyWithoutStaffNestedInput
    grouprequest?: grouprequestUncheckedUpdateManyWithoutApproverNestedInput
    grade?: gradeUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type projectgroupUpsertWithoutProjectmeetingInput = {
    update: XOR<projectgroupUpdateWithoutProjectmeetingInput, projectgroupUncheckedUpdateWithoutProjectmeetingInput>
    create: XOR<projectgroupCreateWithoutProjectmeetingInput, projectgroupUncheckedCreateWithoutProjectmeetingInput>
    where?: projectgroupWhereInput
  }

  export type projectgroupUpdateToOneWithWhereWithoutProjectmeetingInput = {
    where?: projectgroupWhereInput
    data: XOR<projectgroupUpdateWithoutProjectmeetingInput, projectgroupUncheckedUpdateWithoutProjectmeetingInput>
  }

  export type projectgroupUpdateWithoutProjectmeetingInput = {
    projectgroupname?: NullableStringFieldUpdateOperationsInput | string | null
    projecttitle?: NullableStringFieldUpdateOperationsInput | string | null
    projectarea?: NullableStringFieldUpdateOperationsInput | string | null
    projectdescription?: NullableStringFieldUpdateOperationsInput | string | null
    averagecpi?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staff_projectgroup_convenerstaffidTostaff?: staffUpdateOneWithoutProjectgroup_projectgroup_convenerstaffidTostaffNestedInput
    staff_projectgroup_expertstaffidTostaff?: staffUpdateOneWithoutProjectgroup_projectgroup_expertstaffidTostaffNestedInput
    projecttype?: projecttypeUpdateOneWithoutProjectgroupNestedInput
    projectgroupmember?: projectgroupmemberUpdateManyWithoutProjectgroupNestedInput
    grade?: gradeUpdateManyWithoutProjectgroupNestedInput
  }

  export type projectgroupUncheckedUpdateWithoutProjectmeetingInput = {
    projectgroupid?: IntFieldUpdateOperationsInput | number
    projecttypeid?: NullableIntFieldUpdateOperationsInput | number | null
    projectgroupname?: NullableStringFieldUpdateOperationsInput | string | null
    projecttitle?: NullableStringFieldUpdateOperationsInput | string | null
    projectarea?: NullableStringFieldUpdateOperationsInput | string | null
    projectdescription?: NullableStringFieldUpdateOperationsInput | string | null
    averagecpi?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    convenerstaffid?: NullableIntFieldUpdateOperationsInput | number | null
    expertstaffid?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projectgroupmember?: projectgroupmemberUncheckedUpdateManyWithoutProjectgroupNestedInput
    grade?: gradeUncheckedUpdateManyWithoutProjectgroupNestedInput
  }

  export type projectmeetingattendanceUpsertWithWhereUniqueWithoutProjectmeetingInput = {
    where: projectmeetingattendanceWhereUniqueInput
    update: XOR<projectmeetingattendanceUpdateWithoutProjectmeetingInput, projectmeetingattendanceUncheckedUpdateWithoutProjectmeetingInput>
    create: XOR<projectmeetingattendanceCreateWithoutProjectmeetingInput, projectmeetingattendanceUncheckedCreateWithoutProjectmeetingInput>
  }

  export type projectmeetingattendanceUpdateWithWhereUniqueWithoutProjectmeetingInput = {
    where: projectmeetingattendanceWhereUniqueInput
    data: XOR<projectmeetingattendanceUpdateWithoutProjectmeetingInput, projectmeetingattendanceUncheckedUpdateWithoutProjectmeetingInput>
  }

  export type projectmeetingattendanceUpdateManyWithWhereWithoutProjectmeetingInput = {
    where: projectmeetingattendanceScalarWhereInput
    data: XOR<projectmeetingattendanceUpdateManyMutationInput, projectmeetingattendanceUncheckedUpdateManyWithoutProjectmeetingInput>
  }

  export type projectmeetingattendanceScalarWhereInput = {
    AND?: projectmeetingattendanceScalarWhereInput | projectmeetingattendanceScalarWhereInput[]
    OR?: projectmeetingattendanceScalarWhereInput[]
    NOT?: projectmeetingattendanceScalarWhereInput | projectmeetingattendanceScalarWhereInput[]
    projectmeetingattendanceid?: IntFilter<"projectmeetingattendance"> | number
    studentid?: IntNullableFilter<"projectmeetingattendance"> | number | null
    projectmeetingid?: IntNullableFilter<"projectmeetingattendance"> | number | null
    ispresent?: BoolNullableFilter<"projectmeetingattendance"> | boolean | null
    attendanceremarks?: StringNullableFilter<"projectmeetingattendance"> | string | null
    description?: StringNullableFilter<"projectmeetingattendance"> | string | null
    created?: DateTimeNullableFilter<"projectmeetingattendance"> | Date | string | null
    modified?: DateTimeNullableFilter<"projectmeetingattendance"> | Date | string | null
  }

  export type projectmeetingCreateWithoutProjectmeetingattendanceInput = {
    meetingdatetime?: Date | string | null
    meetingpurpose?: string | null
    meetinglocation?: string | null
    meetingnotes?: string | null
    meetingstatus?: string | null
    meetingstatusdescription?: string | null
    meetingstatusdatetime?: Date | string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    staff?: staffCreateNestedOneWithoutProjectmeetingInput
    projectgroup?: projectgroupCreateNestedOneWithoutProjectmeetingInput
  }

  export type projectmeetingUncheckedCreateWithoutProjectmeetingattendanceInput = {
    projectmeetingid?: number
    projectgroupid?: number | null
    guidestaffid?: number | null
    meetingdatetime?: Date | string | null
    meetingpurpose?: string | null
    meetinglocation?: string | null
    meetingnotes?: string | null
    meetingstatus?: string | null
    meetingstatusdescription?: string | null
    meetingstatusdatetime?: Date | string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
  }

  export type projectmeetingCreateOrConnectWithoutProjectmeetingattendanceInput = {
    where: projectmeetingWhereUniqueInput
    create: XOR<projectmeetingCreateWithoutProjectmeetingattendanceInput, projectmeetingUncheckedCreateWithoutProjectmeetingattendanceInput>
  }

  export type studentCreateWithoutProjectmeetingattendanceInput = {
    studentname: string
    phone?: string | null
    email: string
    password: string
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    profileimage?: string | null
    projectgroupmember?: projectgroupmemberCreateNestedManyWithoutStudentInput
    staff?: staffCreateNestedOneWithoutStudentInput
    grouprequest?: grouprequestCreateNestedManyWithoutLeaderInput
  }

  export type studentUncheckedCreateWithoutProjectmeetingattendanceInput = {
    studentid?: number
    studentname: string
    phone?: string | null
    email: string
    password: string
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    registeredby?: number | null
    profileimage?: string | null
    projectgroupmember?: projectgroupmemberUncheckedCreateNestedManyWithoutStudentInput
    grouprequest?: grouprequestUncheckedCreateNestedManyWithoutLeaderInput
  }

  export type studentCreateOrConnectWithoutProjectmeetingattendanceInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutProjectmeetingattendanceInput, studentUncheckedCreateWithoutProjectmeetingattendanceInput>
  }

  export type projectmeetingUpsertWithoutProjectmeetingattendanceInput = {
    update: XOR<projectmeetingUpdateWithoutProjectmeetingattendanceInput, projectmeetingUncheckedUpdateWithoutProjectmeetingattendanceInput>
    create: XOR<projectmeetingCreateWithoutProjectmeetingattendanceInput, projectmeetingUncheckedCreateWithoutProjectmeetingattendanceInput>
    where?: projectmeetingWhereInput
  }

  export type projectmeetingUpdateToOneWithWhereWithoutProjectmeetingattendanceInput = {
    where?: projectmeetingWhereInput
    data: XOR<projectmeetingUpdateWithoutProjectmeetingattendanceInput, projectmeetingUncheckedUpdateWithoutProjectmeetingattendanceInput>
  }

  export type projectmeetingUpdateWithoutProjectmeetingattendanceInput = {
    meetingdatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetingpurpose?: NullableStringFieldUpdateOperationsInput | string | null
    meetinglocation?: NullableStringFieldUpdateOperationsInput | string | null
    meetingnotes?: NullableStringFieldUpdateOperationsInput | string | null
    meetingstatus?: NullableStringFieldUpdateOperationsInput | string | null
    meetingstatusdescription?: NullableStringFieldUpdateOperationsInput | string | null
    meetingstatusdatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staff?: staffUpdateOneWithoutProjectmeetingNestedInput
    projectgroup?: projectgroupUpdateOneWithoutProjectmeetingNestedInput
  }

  export type projectmeetingUncheckedUpdateWithoutProjectmeetingattendanceInput = {
    projectmeetingid?: IntFieldUpdateOperationsInput | number
    projectgroupid?: NullableIntFieldUpdateOperationsInput | number | null
    guidestaffid?: NullableIntFieldUpdateOperationsInput | number | null
    meetingdatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetingpurpose?: NullableStringFieldUpdateOperationsInput | string | null
    meetinglocation?: NullableStringFieldUpdateOperationsInput | string | null
    meetingnotes?: NullableStringFieldUpdateOperationsInput | string | null
    meetingstatus?: NullableStringFieldUpdateOperationsInput | string | null
    meetingstatusdescription?: NullableStringFieldUpdateOperationsInput | string | null
    meetingstatusdatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type studentUpsertWithoutProjectmeetingattendanceInput = {
    update: XOR<studentUpdateWithoutProjectmeetingattendanceInput, studentUncheckedUpdateWithoutProjectmeetingattendanceInput>
    create: XOR<studentCreateWithoutProjectmeetingattendanceInput, studentUncheckedCreateWithoutProjectmeetingattendanceInput>
    where?: studentWhereInput
  }

  export type studentUpdateToOneWithWhereWithoutProjectmeetingattendanceInput = {
    where?: studentWhereInput
    data: XOR<studentUpdateWithoutProjectmeetingattendanceInput, studentUncheckedUpdateWithoutProjectmeetingattendanceInput>
  }

  export type studentUpdateWithoutProjectmeetingattendanceInput = {
    studentname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileimage?: NullableStringFieldUpdateOperationsInput | string | null
    projectgroupmember?: projectgroupmemberUpdateManyWithoutStudentNestedInput
    staff?: staffUpdateOneWithoutStudentNestedInput
    grouprequest?: grouprequestUpdateManyWithoutLeaderNestedInput
  }

  export type studentUncheckedUpdateWithoutProjectmeetingattendanceInput = {
    studentid?: IntFieldUpdateOperationsInput | number
    studentname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registeredby?: NullableIntFieldUpdateOperationsInput | number | null
    profileimage?: NullableStringFieldUpdateOperationsInput | string | null
    projectgroupmember?: projectgroupmemberUncheckedUpdateManyWithoutStudentNestedInput
    grouprequest?: grouprequestUncheckedUpdateManyWithoutLeaderNestedInput
  }

  export type projectgroupCreateWithoutProjecttypeInput = {
    projectgroupname?: string | null
    projecttitle?: string | null
    projectarea?: string | null
    projectdescription?: string | null
    averagecpi?: number | null
    description?: string | null
    status?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    staff_projectgroup_convenerstaffidTostaff?: staffCreateNestedOneWithoutProjectgroup_projectgroup_convenerstaffidTostaffInput
    staff_projectgroup_expertstaffidTostaff?: staffCreateNestedOneWithoutProjectgroup_projectgroup_expertstaffidTostaffInput
    projectgroupmember?: projectgroupmemberCreateNestedManyWithoutProjectgroupInput
    projectmeeting?: projectmeetingCreateNestedManyWithoutProjectgroupInput
    grade?: gradeCreateNestedManyWithoutProjectgroupInput
  }

  export type projectgroupUncheckedCreateWithoutProjecttypeInput = {
    projectgroupid?: number
    projectgroupname?: string | null
    projecttitle?: string | null
    projectarea?: string | null
    projectdescription?: string | null
    averagecpi?: number | null
    description?: string | null
    convenerstaffid?: number | null
    expertstaffid?: number | null
    status?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    projectgroupmember?: projectgroupmemberUncheckedCreateNestedManyWithoutProjectgroupInput
    projectmeeting?: projectmeetingUncheckedCreateNestedManyWithoutProjectgroupInput
    grade?: gradeUncheckedCreateNestedManyWithoutProjectgroupInput
  }

  export type projectgroupCreateOrConnectWithoutProjecttypeInput = {
    where: projectgroupWhereUniqueInput
    create: XOR<projectgroupCreateWithoutProjecttypeInput, projectgroupUncheckedCreateWithoutProjecttypeInput>
  }

  export type projectgroupCreateManyProjecttypeInputEnvelope = {
    data: projectgroupCreateManyProjecttypeInput | projectgroupCreateManyProjecttypeInput[]
    skipDuplicates?: boolean
  }

  export type projectgroupUpsertWithWhereUniqueWithoutProjecttypeInput = {
    where: projectgroupWhereUniqueInput
    update: XOR<projectgroupUpdateWithoutProjecttypeInput, projectgroupUncheckedUpdateWithoutProjecttypeInput>
    create: XOR<projectgroupCreateWithoutProjecttypeInput, projectgroupUncheckedCreateWithoutProjecttypeInput>
  }

  export type projectgroupUpdateWithWhereUniqueWithoutProjecttypeInput = {
    where: projectgroupWhereUniqueInput
    data: XOR<projectgroupUpdateWithoutProjecttypeInput, projectgroupUncheckedUpdateWithoutProjecttypeInput>
  }

  export type projectgroupUpdateManyWithWhereWithoutProjecttypeInput = {
    where: projectgroupScalarWhereInput
    data: XOR<projectgroupUpdateManyMutationInput, projectgroupUncheckedUpdateManyWithoutProjecttypeInput>
  }

  export type projectgroupScalarWhereInput = {
    AND?: projectgroupScalarWhereInput | projectgroupScalarWhereInput[]
    OR?: projectgroupScalarWhereInput[]
    NOT?: projectgroupScalarWhereInput | projectgroupScalarWhereInput[]
    projectgroupid?: IntFilter<"projectgroup"> | number
    projecttypeid?: IntNullableFilter<"projectgroup"> | number | null
    projectgroupname?: StringNullableFilter<"projectgroup"> | string | null
    projecttitle?: StringNullableFilter<"projectgroup"> | string | null
    projectarea?: StringNullableFilter<"projectgroup"> | string | null
    projectdescription?: StringNullableFilter<"projectgroup"> | string | null
    averagecpi?: FloatNullableFilter<"projectgroup"> | number | null
    description?: StringNullableFilter<"projectgroup"> | string | null
    convenerstaffid?: IntNullableFilter<"projectgroup"> | number | null
    expertstaffid?: IntNullableFilter<"projectgroup"> | number | null
    status?: StringNullableFilter<"projectgroup"> | string | null
    created?: DateTimeNullableFilter<"projectgroup"> | Date | string | null
    modified?: DateTimeNullableFilter<"projectgroup"> | Date | string | null
  }

  export type projectgroupCreateWithoutStaff_projectgroup_convenerstaffidTostaffInput = {
    projectgroupname?: string | null
    projecttitle?: string | null
    projectarea?: string | null
    projectdescription?: string | null
    averagecpi?: number | null
    description?: string | null
    status?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    staff_projectgroup_expertstaffidTostaff?: staffCreateNestedOneWithoutProjectgroup_projectgroup_expertstaffidTostaffInput
    projecttype?: projecttypeCreateNestedOneWithoutProjectgroupInput
    projectgroupmember?: projectgroupmemberCreateNestedManyWithoutProjectgroupInput
    projectmeeting?: projectmeetingCreateNestedManyWithoutProjectgroupInput
    grade?: gradeCreateNestedManyWithoutProjectgroupInput
  }

  export type projectgroupUncheckedCreateWithoutStaff_projectgroup_convenerstaffidTostaffInput = {
    projectgroupid?: number
    projecttypeid?: number | null
    projectgroupname?: string | null
    projecttitle?: string | null
    projectarea?: string | null
    projectdescription?: string | null
    averagecpi?: number | null
    description?: string | null
    expertstaffid?: number | null
    status?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    projectgroupmember?: projectgroupmemberUncheckedCreateNestedManyWithoutProjectgroupInput
    projectmeeting?: projectmeetingUncheckedCreateNestedManyWithoutProjectgroupInput
    grade?: gradeUncheckedCreateNestedManyWithoutProjectgroupInput
  }

  export type projectgroupCreateOrConnectWithoutStaff_projectgroup_convenerstaffidTostaffInput = {
    where: projectgroupWhereUniqueInput
    create: XOR<projectgroupCreateWithoutStaff_projectgroup_convenerstaffidTostaffInput, projectgroupUncheckedCreateWithoutStaff_projectgroup_convenerstaffidTostaffInput>
  }

  export type projectgroupCreateManyStaff_projectgroup_convenerstaffidTostaffInputEnvelope = {
    data: projectgroupCreateManyStaff_projectgroup_convenerstaffidTostaffInput | projectgroupCreateManyStaff_projectgroup_convenerstaffidTostaffInput[]
    skipDuplicates?: boolean
  }

  export type projectgroupCreateWithoutStaff_projectgroup_expertstaffidTostaffInput = {
    projectgroupname?: string | null
    projecttitle?: string | null
    projectarea?: string | null
    projectdescription?: string | null
    averagecpi?: number | null
    description?: string | null
    status?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    staff_projectgroup_convenerstaffidTostaff?: staffCreateNestedOneWithoutProjectgroup_projectgroup_convenerstaffidTostaffInput
    projecttype?: projecttypeCreateNestedOneWithoutProjectgroupInput
    projectgroupmember?: projectgroupmemberCreateNestedManyWithoutProjectgroupInput
    projectmeeting?: projectmeetingCreateNestedManyWithoutProjectgroupInput
    grade?: gradeCreateNestedManyWithoutProjectgroupInput
  }

  export type projectgroupUncheckedCreateWithoutStaff_projectgroup_expertstaffidTostaffInput = {
    projectgroupid?: number
    projecttypeid?: number | null
    projectgroupname?: string | null
    projecttitle?: string | null
    projectarea?: string | null
    projectdescription?: string | null
    averagecpi?: number | null
    description?: string | null
    convenerstaffid?: number | null
    status?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    projectgroupmember?: projectgroupmemberUncheckedCreateNestedManyWithoutProjectgroupInput
    projectmeeting?: projectmeetingUncheckedCreateNestedManyWithoutProjectgroupInput
    grade?: gradeUncheckedCreateNestedManyWithoutProjectgroupInput
  }

  export type projectgroupCreateOrConnectWithoutStaff_projectgroup_expertstaffidTostaffInput = {
    where: projectgroupWhereUniqueInput
    create: XOR<projectgroupCreateWithoutStaff_projectgroup_expertstaffidTostaffInput, projectgroupUncheckedCreateWithoutStaff_projectgroup_expertstaffidTostaffInput>
  }

  export type projectgroupCreateManyStaff_projectgroup_expertstaffidTostaffInputEnvelope = {
    data: projectgroupCreateManyStaff_projectgroup_expertstaffidTostaffInput | projectgroupCreateManyStaff_projectgroup_expertstaffidTostaffInput[]
    skipDuplicates?: boolean
  }

  export type projectmeetingCreateWithoutStaffInput = {
    meetingdatetime?: Date | string | null
    meetingpurpose?: string | null
    meetinglocation?: string | null
    meetingnotes?: string | null
    meetingstatus?: string | null
    meetingstatusdescription?: string | null
    meetingstatusdatetime?: Date | string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    projectgroup?: projectgroupCreateNestedOneWithoutProjectmeetingInput
    projectmeetingattendance?: projectmeetingattendanceCreateNestedManyWithoutProjectmeetingInput
  }

  export type projectmeetingUncheckedCreateWithoutStaffInput = {
    projectmeetingid?: number
    projectgroupid?: number | null
    meetingdatetime?: Date | string | null
    meetingpurpose?: string | null
    meetinglocation?: string | null
    meetingnotes?: string | null
    meetingstatus?: string | null
    meetingstatusdescription?: string | null
    meetingstatusdatetime?: Date | string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    projectmeetingattendance?: projectmeetingattendanceUncheckedCreateNestedManyWithoutProjectmeetingInput
  }

  export type projectmeetingCreateOrConnectWithoutStaffInput = {
    where: projectmeetingWhereUniqueInput
    create: XOR<projectmeetingCreateWithoutStaffInput, projectmeetingUncheckedCreateWithoutStaffInput>
  }

  export type projectmeetingCreateManyStaffInputEnvelope = {
    data: projectmeetingCreateManyStaffInput | projectmeetingCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type staffCreateWithoutOther_staffInput = {
    staffname: string
    phone?: string | null
    email: string
    password: string
    role?: string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    profileimage?: string | null
    projectgroup_projectgroup_convenerstaffidTostaff?: projectgroupCreateNestedManyWithoutStaff_projectgroup_convenerstaffidTostaffInput
    projectgroup_projectgroup_expertstaffidTostaff?: projectgroupCreateNestedManyWithoutStaff_projectgroup_expertstaffidTostaffInput
    projectmeeting?: projectmeetingCreateNestedManyWithoutStaffInput
    staff?: staffCreateNestedOneWithoutOther_staffInput
    student?: studentCreateNestedManyWithoutStaffInput
    grouprequest?: grouprequestCreateNestedManyWithoutApproverInput
    grade?: gradeCreateNestedManyWithoutStaffInput
  }

  export type staffUncheckedCreateWithoutOther_staffInput = {
    staffid?: number
    staffname: string
    phone?: string | null
    email: string
    password: string
    role?: string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    registeredby?: number | null
    profileimage?: string | null
    projectgroup_projectgroup_convenerstaffidTostaff?: projectgroupUncheckedCreateNestedManyWithoutStaff_projectgroup_convenerstaffidTostaffInput
    projectgroup_projectgroup_expertstaffidTostaff?: projectgroupUncheckedCreateNestedManyWithoutStaff_projectgroup_expertstaffidTostaffInput
    projectmeeting?: projectmeetingUncheckedCreateNestedManyWithoutStaffInput
    student?: studentUncheckedCreateNestedManyWithoutStaffInput
    grouprequest?: grouprequestUncheckedCreateNestedManyWithoutApproverInput
    grade?: gradeUncheckedCreateNestedManyWithoutStaffInput
  }

  export type staffCreateOrConnectWithoutOther_staffInput = {
    where: staffWhereUniqueInput
    create: XOR<staffCreateWithoutOther_staffInput, staffUncheckedCreateWithoutOther_staffInput>
  }

  export type staffCreateWithoutStaffInput = {
    staffname: string
    phone?: string | null
    email: string
    password: string
    role?: string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    profileimage?: string | null
    projectgroup_projectgroup_convenerstaffidTostaff?: projectgroupCreateNestedManyWithoutStaff_projectgroup_convenerstaffidTostaffInput
    projectgroup_projectgroup_expertstaffidTostaff?: projectgroupCreateNestedManyWithoutStaff_projectgroup_expertstaffidTostaffInput
    projectmeeting?: projectmeetingCreateNestedManyWithoutStaffInput
    other_staff?: staffCreateNestedManyWithoutStaffInput
    student?: studentCreateNestedManyWithoutStaffInput
    grouprequest?: grouprequestCreateNestedManyWithoutApproverInput
    grade?: gradeCreateNestedManyWithoutStaffInput
  }

  export type staffUncheckedCreateWithoutStaffInput = {
    staffid?: number
    staffname: string
    phone?: string | null
    email: string
    password: string
    role?: string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    profileimage?: string | null
    projectgroup_projectgroup_convenerstaffidTostaff?: projectgroupUncheckedCreateNestedManyWithoutStaff_projectgroup_convenerstaffidTostaffInput
    projectgroup_projectgroup_expertstaffidTostaff?: projectgroupUncheckedCreateNestedManyWithoutStaff_projectgroup_expertstaffidTostaffInput
    projectmeeting?: projectmeetingUncheckedCreateNestedManyWithoutStaffInput
    other_staff?: staffUncheckedCreateNestedManyWithoutStaffInput
    student?: studentUncheckedCreateNestedManyWithoutStaffInput
    grouprequest?: grouprequestUncheckedCreateNestedManyWithoutApproverInput
    grade?: gradeUncheckedCreateNestedManyWithoutStaffInput
  }

  export type staffCreateOrConnectWithoutStaffInput = {
    where: staffWhereUniqueInput
    create: XOR<staffCreateWithoutStaffInput, staffUncheckedCreateWithoutStaffInput>
  }

  export type staffCreateManyStaffInputEnvelope = {
    data: staffCreateManyStaffInput | staffCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type studentCreateWithoutStaffInput = {
    studentname: string
    phone?: string | null
    email: string
    password: string
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    profileimage?: string | null
    projectgroupmember?: projectgroupmemberCreateNestedManyWithoutStudentInput
    projectmeetingattendance?: projectmeetingattendanceCreateNestedManyWithoutStudentInput
    grouprequest?: grouprequestCreateNestedManyWithoutLeaderInput
  }

  export type studentUncheckedCreateWithoutStaffInput = {
    studentid?: number
    studentname: string
    phone?: string | null
    email: string
    password: string
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    profileimage?: string | null
    projectgroupmember?: projectgroupmemberUncheckedCreateNestedManyWithoutStudentInput
    projectmeetingattendance?: projectmeetingattendanceUncheckedCreateNestedManyWithoutStudentInput
    grouprequest?: grouprequestUncheckedCreateNestedManyWithoutLeaderInput
  }

  export type studentCreateOrConnectWithoutStaffInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutStaffInput, studentUncheckedCreateWithoutStaffInput>
  }

  export type studentCreateManyStaffInputEnvelope = {
    data: studentCreateManyStaffInput | studentCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type grouprequestCreateWithoutApproverInput = {
    groupname: string
    projecttitle: string
    projectarea?: string | null
    projectdescription?: string | null
    technologies?: string | null
    memberdata: string
    status?: string
    rejectionreason?: string | null
    created?: Date | string
    modified?: Date | string
    leader: studentCreateNestedOneWithoutGrouprequestInput
  }

  export type grouprequestUncheckedCreateWithoutApproverInput = {
    requestid?: number
    groupname: string
    projecttitle: string
    projectarea?: string | null
    projectdescription?: string | null
    technologies?: string | null
    leaderid: number
    memberdata: string
    status?: string
    rejectionreason?: string | null
    created?: Date | string
    modified?: Date | string
  }

  export type grouprequestCreateOrConnectWithoutApproverInput = {
    where: grouprequestWhereUniqueInput
    create: XOR<grouprequestCreateWithoutApproverInput, grouprequestUncheckedCreateWithoutApproverInput>
  }

  export type grouprequestCreateManyApproverInputEnvelope = {
    data: grouprequestCreateManyApproverInput | grouprequestCreateManyApproverInput[]
    skipDuplicates?: boolean
  }

  export type gradeCreateWithoutStaffInput = {
    component: string
    marks: number
    maxmarks: number
    feedback?: string | null
    gradedat?: Date | string
    created?: Date | string
    modified?: Date | string
    projectgroup: projectgroupCreateNestedOneWithoutGradeInput
  }

  export type gradeUncheckedCreateWithoutStaffInput = {
    gradeid?: number
    projectgroupid: number
    component: string
    marks: number
    maxmarks: number
    feedback?: string | null
    gradedat?: Date | string
    created?: Date | string
    modified?: Date | string
  }

  export type gradeCreateOrConnectWithoutStaffInput = {
    where: gradeWhereUniqueInput
    create: XOR<gradeCreateWithoutStaffInput, gradeUncheckedCreateWithoutStaffInput>
  }

  export type gradeCreateManyStaffInputEnvelope = {
    data: gradeCreateManyStaffInput | gradeCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type projectgroupUpsertWithWhereUniqueWithoutStaff_projectgroup_convenerstaffidTostaffInput = {
    where: projectgroupWhereUniqueInput
    update: XOR<projectgroupUpdateWithoutStaff_projectgroup_convenerstaffidTostaffInput, projectgroupUncheckedUpdateWithoutStaff_projectgroup_convenerstaffidTostaffInput>
    create: XOR<projectgroupCreateWithoutStaff_projectgroup_convenerstaffidTostaffInput, projectgroupUncheckedCreateWithoutStaff_projectgroup_convenerstaffidTostaffInput>
  }

  export type projectgroupUpdateWithWhereUniqueWithoutStaff_projectgroup_convenerstaffidTostaffInput = {
    where: projectgroupWhereUniqueInput
    data: XOR<projectgroupUpdateWithoutStaff_projectgroup_convenerstaffidTostaffInput, projectgroupUncheckedUpdateWithoutStaff_projectgroup_convenerstaffidTostaffInput>
  }

  export type projectgroupUpdateManyWithWhereWithoutStaff_projectgroup_convenerstaffidTostaffInput = {
    where: projectgroupScalarWhereInput
    data: XOR<projectgroupUpdateManyMutationInput, projectgroupUncheckedUpdateManyWithoutStaff_projectgroup_convenerstaffidTostaffInput>
  }

  export type projectgroupUpsertWithWhereUniqueWithoutStaff_projectgroup_expertstaffidTostaffInput = {
    where: projectgroupWhereUniqueInput
    update: XOR<projectgroupUpdateWithoutStaff_projectgroup_expertstaffidTostaffInput, projectgroupUncheckedUpdateWithoutStaff_projectgroup_expertstaffidTostaffInput>
    create: XOR<projectgroupCreateWithoutStaff_projectgroup_expertstaffidTostaffInput, projectgroupUncheckedCreateWithoutStaff_projectgroup_expertstaffidTostaffInput>
  }

  export type projectgroupUpdateWithWhereUniqueWithoutStaff_projectgroup_expertstaffidTostaffInput = {
    where: projectgroupWhereUniqueInput
    data: XOR<projectgroupUpdateWithoutStaff_projectgroup_expertstaffidTostaffInput, projectgroupUncheckedUpdateWithoutStaff_projectgroup_expertstaffidTostaffInput>
  }

  export type projectgroupUpdateManyWithWhereWithoutStaff_projectgroup_expertstaffidTostaffInput = {
    where: projectgroupScalarWhereInput
    data: XOR<projectgroupUpdateManyMutationInput, projectgroupUncheckedUpdateManyWithoutStaff_projectgroup_expertstaffidTostaffInput>
  }

  export type projectmeetingUpsertWithWhereUniqueWithoutStaffInput = {
    where: projectmeetingWhereUniqueInput
    update: XOR<projectmeetingUpdateWithoutStaffInput, projectmeetingUncheckedUpdateWithoutStaffInput>
    create: XOR<projectmeetingCreateWithoutStaffInput, projectmeetingUncheckedCreateWithoutStaffInput>
  }

  export type projectmeetingUpdateWithWhereUniqueWithoutStaffInput = {
    where: projectmeetingWhereUniqueInput
    data: XOR<projectmeetingUpdateWithoutStaffInput, projectmeetingUncheckedUpdateWithoutStaffInput>
  }

  export type projectmeetingUpdateManyWithWhereWithoutStaffInput = {
    where: projectmeetingScalarWhereInput
    data: XOR<projectmeetingUpdateManyMutationInput, projectmeetingUncheckedUpdateManyWithoutStaffInput>
  }

  export type staffUpsertWithoutOther_staffInput = {
    update: XOR<staffUpdateWithoutOther_staffInput, staffUncheckedUpdateWithoutOther_staffInput>
    create: XOR<staffCreateWithoutOther_staffInput, staffUncheckedCreateWithoutOther_staffInput>
    where?: staffWhereInput
  }

  export type staffUpdateToOneWithWhereWithoutOther_staffInput = {
    where?: staffWhereInput
    data: XOR<staffUpdateWithoutOther_staffInput, staffUncheckedUpdateWithoutOther_staffInput>
  }

  export type staffUpdateWithoutOther_staffInput = {
    staffname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileimage?: NullableStringFieldUpdateOperationsInput | string | null
    projectgroup_projectgroup_convenerstaffidTostaff?: projectgroupUpdateManyWithoutStaff_projectgroup_convenerstaffidTostaffNestedInput
    projectgroup_projectgroup_expertstaffidTostaff?: projectgroupUpdateManyWithoutStaff_projectgroup_expertstaffidTostaffNestedInput
    projectmeeting?: projectmeetingUpdateManyWithoutStaffNestedInput
    staff?: staffUpdateOneWithoutOther_staffNestedInput
    student?: studentUpdateManyWithoutStaffNestedInput
    grouprequest?: grouprequestUpdateManyWithoutApproverNestedInput
    grade?: gradeUpdateManyWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateWithoutOther_staffInput = {
    staffid?: IntFieldUpdateOperationsInput | number
    staffname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registeredby?: NullableIntFieldUpdateOperationsInput | number | null
    profileimage?: NullableStringFieldUpdateOperationsInput | string | null
    projectgroup_projectgroup_convenerstaffidTostaff?: projectgroupUncheckedUpdateManyWithoutStaff_projectgroup_convenerstaffidTostaffNestedInput
    projectgroup_projectgroup_expertstaffidTostaff?: projectgroupUncheckedUpdateManyWithoutStaff_projectgroup_expertstaffidTostaffNestedInput
    projectmeeting?: projectmeetingUncheckedUpdateManyWithoutStaffNestedInput
    student?: studentUncheckedUpdateManyWithoutStaffNestedInput
    grouprequest?: grouprequestUncheckedUpdateManyWithoutApproverNestedInput
    grade?: gradeUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type staffUpsertWithWhereUniqueWithoutStaffInput = {
    where: staffWhereUniqueInput
    update: XOR<staffUpdateWithoutStaffInput, staffUncheckedUpdateWithoutStaffInput>
    create: XOR<staffCreateWithoutStaffInput, staffUncheckedCreateWithoutStaffInput>
  }

  export type staffUpdateWithWhereUniqueWithoutStaffInput = {
    where: staffWhereUniqueInput
    data: XOR<staffUpdateWithoutStaffInput, staffUncheckedUpdateWithoutStaffInput>
  }

  export type staffUpdateManyWithWhereWithoutStaffInput = {
    where: staffScalarWhereInput
    data: XOR<staffUpdateManyMutationInput, staffUncheckedUpdateManyWithoutStaffInput>
  }

  export type staffScalarWhereInput = {
    AND?: staffScalarWhereInput | staffScalarWhereInput[]
    OR?: staffScalarWhereInput[]
    NOT?: staffScalarWhereInput | staffScalarWhereInput[]
    staffid?: IntFilter<"staff"> | number
    staffname?: StringFilter<"staff"> | string
    phone?: StringNullableFilter<"staff"> | string | null
    email?: StringFilter<"staff"> | string
    password?: StringFilter<"staff"> | string
    role?: StringNullableFilter<"staff"> | string | null
    description?: StringNullableFilter<"staff"> | string | null
    created?: DateTimeNullableFilter<"staff"> | Date | string | null
    modified?: DateTimeNullableFilter<"staff"> | Date | string | null
    registeredby?: IntNullableFilter<"staff"> | number | null
    profileimage?: StringNullableFilter<"staff"> | string | null
  }

  export type studentUpsertWithWhereUniqueWithoutStaffInput = {
    where: studentWhereUniqueInput
    update: XOR<studentUpdateWithoutStaffInput, studentUncheckedUpdateWithoutStaffInput>
    create: XOR<studentCreateWithoutStaffInput, studentUncheckedCreateWithoutStaffInput>
  }

  export type studentUpdateWithWhereUniqueWithoutStaffInput = {
    where: studentWhereUniqueInput
    data: XOR<studentUpdateWithoutStaffInput, studentUncheckedUpdateWithoutStaffInput>
  }

  export type studentUpdateManyWithWhereWithoutStaffInput = {
    where: studentScalarWhereInput
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyWithoutStaffInput>
  }

  export type studentScalarWhereInput = {
    AND?: studentScalarWhereInput | studentScalarWhereInput[]
    OR?: studentScalarWhereInput[]
    NOT?: studentScalarWhereInput | studentScalarWhereInput[]
    studentid?: IntFilter<"student"> | number
    studentname?: StringFilter<"student"> | string
    phone?: StringNullableFilter<"student"> | string | null
    email?: StringFilter<"student"> | string
    password?: StringFilter<"student"> | string
    description?: StringNullableFilter<"student"> | string | null
    created?: DateTimeNullableFilter<"student"> | Date | string | null
    modified?: DateTimeNullableFilter<"student"> | Date | string | null
    registeredby?: IntNullableFilter<"student"> | number | null
    profileimage?: StringNullableFilter<"student"> | string | null
  }

  export type grouprequestUpsertWithWhereUniqueWithoutApproverInput = {
    where: grouprequestWhereUniqueInput
    update: XOR<grouprequestUpdateWithoutApproverInput, grouprequestUncheckedUpdateWithoutApproverInput>
    create: XOR<grouprequestCreateWithoutApproverInput, grouprequestUncheckedCreateWithoutApproverInput>
  }

  export type grouprequestUpdateWithWhereUniqueWithoutApproverInput = {
    where: grouprequestWhereUniqueInput
    data: XOR<grouprequestUpdateWithoutApproverInput, grouprequestUncheckedUpdateWithoutApproverInput>
  }

  export type grouprequestUpdateManyWithWhereWithoutApproverInput = {
    where: grouprequestScalarWhereInput
    data: XOR<grouprequestUpdateManyMutationInput, grouprequestUncheckedUpdateManyWithoutApproverInput>
  }

  export type grouprequestScalarWhereInput = {
    AND?: grouprequestScalarWhereInput | grouprequestScalarWhereInput[]
    OR?: grouprequestScalarWhereInput[]
    NOT?: grouprequestScalarWhereInput | grouprequestScalarWhereInput[]
    requestid?: IntFilter<"grouprequest"> | number
    groupname?: StringFilter<"grouprequest"> | string
    projecttitle?: StringFilter<"grouprequest"> | string
    projectarea?: StringNullableFilter<"grouprequest"> | string | null
    projectdescription?: StringNullableFilter<"grouprequest"> | string | null
    technologies?: StringNullableFilter<"grouprequest"> | string | null
    leaderid?: IntFilter<"grouprequest"> | number
    memberdata?: StringFilter<"grouprequest"> | string
    status?: StringFilter<"grouprequest"> | string
    rejectionreason?: StringNullableFilter<"grouprequest"> | string | null
    created?: DateTimeFilter<"grouprequest"> | Date | string
    modified?: DateTimeFilter<"grouprequest"> | Date | string
    approvedby?: IntNullableFilter<"grouprequest"> | number | null
  }

  export type gradeUpsertWithWhereUniqueWithoutStaffInput = {
    where: gradeWhereUniqueInput
    update: XOR<gradeUpdateWithoutStaffInput, gradeUncheckedUpdateWithoutStaffInput>
    create: XOR<gradeCreateWithoutStaffInput, gradeUncheckedCreateWithoutStaffInput>
  }

  export type gradeUpdateWithWhereUniqueWithoutStaffInput = {
    where: gradeWhereUniqueInput
    data: XOR<gradeUpdateWithoutStaffInput, gradeUncheckedUpdateWithoutStaffInput>
  }

  export type gradeUpdateManyWithWhereWithoutStaffInput = {
    where: gradeScalarWhereInput
    data: XOR<gradeUpdateManyMutationInput, gradeUncheckedUpdateManyWithoutStaffInput>
  }

  export type projectgroupmemberCreateWithoutStudentInput = {
    isgroupleader?: boolean | null
    studentcgpa?: number | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    projectgroup?: projectgroupCreateNestedOneWithoutProjectgroupmemberInput
  }

  export type projectgroupmemberUncheckedCreateWithoutStudentInput = {
    projectgroupmemberid?: number
    isgroupleader?: boolean | null
    studentcgpa?: number | null
    projectgroupid?: number | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
  }

  export type projectgroupmemberCreateOrConnectWithoutStudentInput = {
    where: projectgroupmemberWhereUniqueInput
    create: XOR<projectgroupmemberCreateWithoutStudentInput, projectgroupmemberUncheckedCreateWithoutStudentInput>
  }

  export type projectgroupmemberCreateManyStudentInputEnvelope = {
    data: projectgroupmemberCreateManyStudentInput | projectgroupmemberCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type projectmeetingattendanceCreateWithoutStudentInput = {
    ispresent?: boolean | null
    attendanceremarks?: string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    projectmeeting?: projectmeetingCreateNestedOneWithoutProjectmeetingattendanceInput
  }

  export type projectmeetingattendanceUncheckedCreateWithoutStudentInput = {
    projectmeetingattendanceid?: number
    projectmeetingid?: number | null
    ispresent?: boolean | null
    attendanceremarks?: string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
  }

  export type projectmeetingattendanceCreateOrConnectWithoutStudentInput = {
    where: projectmeetingattendanceWhereUniqueInput
    create: XOR<projectmeetingattendanceCreateWithoutStudentInput, projectmeetingattendanceUncheckedCreateWithoutStudentInput>
  }

  export type projectmeetingattendanceCreateManyStudentInputEnvelope = {
    data: projectmeetingattendanceCreateManyStudentInput | projectmeetingattendanceCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type staffCreateWithoutStudentInput = {
    staffname: string
    phone?: string | null
    email: string
    password: string
    role?: string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    profileimage?: string | null
    projectgroup_projectgroup_convenerstaffidTostaff?: projectgroupCreateNestedManyWithoutStaff_projectgroup_convenerstaffidTostaffInput
    projectgroup_projectgroup_expertstaffidTostaff?: projectgroupCreateNestedManyWithoutStaff_projectgroup_expertstaffidTostaffInput
    projectmeeting?: projectmeetingCreateNestedManyWithoutStaffInput
    staff?: staffCreateNestedOneWithoutOther_staffInput
    other_staff?: staffCreateNestedManyWithoutStaffInput
    grouprequest?: grouprequestCreateNestedManyWithoutApproverInput
    grade?: gradeCreateNestedManyWithoutStaffInput
  }

  export type staffUncheckedCreateWithoutStudentInput = {
    staffid?: number
    staffname: string
    phone?: string | null
    email: string
    password: string
    role?: string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    registeredby?: number | null
    profileimage?: string | null
    projectgroup_projectgroup_convenerstaffidTostaff?: projectgroupUncheckedCreateNestedManyWithoutStaff_projectgroup_convenerstaffidTostaffInput
    projectgroup_projectgroup_expertstaffidTostaff?: projectgroupUncheckedCreateNestedManyWithoutStaff_projectgroup_expertstaffidTostaffInput
    projectmeeting?: projectmeetingUncheckedCreateNestedManyWithoutStaffInput
    other_staff?: staffUncheckedCreateNestedManyWithoutStaffInput
    grouprequest?: grouprequestUncheckedCreateNestedManyWithoutApproverInput
    grade?: gradeUncheckedCreateNestedManyWithoutStaffInput
  }

  export type staffCreateOrConnectWithoutStudentInput = {
    where: staffWhereUniqueInput
    create: XOR<staffCreateWithoutStudentInput, staffUncheckedCreateWithoutStudentInput>
  }

  export type grouprequestCreateWithoutLeaderInput = {
    groupname: string
    projecttitle: string
    projectarea?: string | null
    projectdescription?: string | null
    technologies?: string | null
    memberdata: string
    status?: string
    rejectionreason?: string | null
    created?: Date | string
    modified?: Date | string
    approver?: staffCreateNestedOneWithoutGrouprequestInput
  }

  export type grouprequestUncheckedCreateWithoutLeaderInput = {
    requestid?: number
    groupname: string
    projecttitle: string
    projectarea?: string | null
    projectdescription?: string | null
    technologies?: string | null
    memberdata: string
    status?: string
    rejectionreason?: string | null
    created?: Date | string
    modified?: Date | string
    approvedby?: number | null
  }

  export type grouprequestCreateOrConnectWithoutLeaderInput = {
    where: grouprequestWhereUniqueInput
    create: XOR<grouprequestCreateWithoutLeaderInput, grouprequestUncheckedCreateWithoutLeaderInput>
  }

  export type grouprequestCreateManyLeaderInputEnvelope = {
    data: grouprequestCreateManyLeaderInput | grouprequestCreateManyLeaderInput[]
    skipDuplicates?: boolean
  }

  export type projectgroupmemberUpsertWithWhereUniqueWithoutStudentInput = {
    where: projectgroupmemberWhereUniqueInput
    update: XOR<projectgroupmemberUpdateWithoutStudentInput, projectgroupmemberUncheckedUpdateWithoutStudentInput>
    create: XOR<projectgroupmemberCreateWithoutStudentInput, projectgroupmemberUncheckedCreateWithoutStudentInput>
  }

  export type projectgroupmemberUpdateWithWhereUniqueWithoutStudentInput = {
    where: projectgroupmemberWhereUniqueInput
    data: XOR<projectgroupmemberUpdateWithoutStudentInput, projectgroupmemberUncheckedUpdateWithoutStudentInput>
  }

  export type projectgroupmemberUpdateManyWithWhereWithoutStudentInput = {
    where: projectgroupmemberScalarWhereInput
    data: XOR<projectgroupmemberUpdateManyMutationInput, projectgroupmemberUncheckedUpdateManyWithoutStudentInput>
  }

  export type projectmeetingattendanceUpsertWithWhereUniqueWithoutStudentInput = {
    where: projectmeetingattendanceWhereUniqueInput
    update: XOR<projectmeetingattendanceUpdateWithoutStudentInput, projectmeetingattendanceUncheckedUpdateWithoutStudentInput>
    create: XOR<projectmeetingattendanceCreateWithoutStudentInput, projectmeetingattendanceUncheckedCreateWithoutStudentInput>
  }

  export type projectmeetingattendanceUpdateWithWhereUniqueWithoutStudentInput = {
    where: projectmeetingattendanceWhereUniqueInput
    data: XOR<projectmeetingattendanceUpdateWithoutStudentInput, projectmeetingattendanceUncheckedUpdateWithoutStudentInput>
  }

  export type projectmeetingattendanceUpdateManyWithWhereWithoutStudentInput = {
    where: projectmeetingattendanceScalarWhereInput
    data: XOR<projectmeetingattendanceUpdateManyMutationInput, projectmeetingattendanceUncheckedUpdateManyWithoutStudentInput>
  }

  export type staffUpsertWithoutStudentInput = {
    update: XOR<staffUpdateWithoutStudentInput, staffUncheckedUpdateWithoutStudentInput>
    create: XOR<staffCreateWithoutStudentInput, staffUncheckedCreateWithoutStudentInput>
    where?: staffWhereInput
  }

  export type staffUpdateToOneWithWhereWithoutStudentInput = {
    where?: staffWhereInput
    data: XOR<staffUpdateWithoutStudentInput, staffUncheckedUpdateWithoutStudentInput>
  }

  export type staffUpdateWithoutStudentInput = {
    staffname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileimage?: NullableStringFieldUpdateOperationsInput | string | null
    projectgroup_projectgroup_convenerstaffidTostaff?: projectgroupUpdateManyWithoutStaff_projectgroup_convenerstaffidTostaffNestedInput
    projectgroup_projectgroup_expertstaffidTostaff?: projectgroupUpdateManyWithoutStaff_projectgroup_expertstaffidTostaffNestedInput
    projectmeeting?: projectmeetingUpdateManyWithoutStaffNestedInput
    staff?: staffUpdateOneWithoutOther_staffNestedInput
    other_staff?: staffUpdateManyWithoutStaffNestedInput
    grouprequest?: grouprequestUpdateManyWithoutApproverNestedInput
    grade?: gradeUpdateManyWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateWithoutStudentInput = {
    staffid?: IntFieldUpdateOperationsInput | number
    staffname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registeredby?: NullableIntFieldUpdateOperationsInput | number | null
    profileimage?: NullableStringFieldUpdateOperationsInput | string | null
    projectgroup_projectgroup_convenerstaffidTostaff?: projectgroupUncheckedUpdateManyWithoutStaff_projectgroup_convenerstaffidTostaffNestedInput
    projectgroup_projectgroup_expertstaffidTostaff?: projectgroupUncheckedUpdateManyWithoutStaff_projectgroup_expertstaffidTostaffNestedInput
    projectmeeting?: projectmeetingUncheckedUpdateManyWithoutStaffNestedInput
    other_staff?: staffUncheckedUpdateManyWithoutStaffNestedInput
    grouprequest?: grouprequestUncheckedUpdateManyWithoutApproverNestedInput
    grade?: gradeUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type grouprequestUpsertWithWhereUniqueWithoutLeaderInput = {
    where: grouprequestWhereUniqueInput
    update: XOR<grouprequestUpdateWithoutLeaderInput, grouprequestUncheckedUpdateWithoutLeaderInput>
    create: XOR<grouprequestCreateWithoutLeaderInput, grouprequestUncheckedCreateWithoutLeaderInput>
  }

  export type grouprequestUpdateWithWhereUniqueWithoutLeaderInput = {
    where: grouprequestWhereUniqueInput
    data: XOR<grouprequestUpdateWithoutLeaderInput, grouprequestUncheckedUpdateWithoutLeaderInput>
  }

  export type grouprequestUpdateManyWithWhereWithoutLeaderInput = {
    where: grouprequestScalarWhereInput
    data: XOR<grouprequestUpdateManyMutationInput, grouprequestUncheckedUpdateManyWithoutLeaderInput>
  }

  export type projectgroupCreateWithoutGradeInput = {
    projectgroupname?: string | null
    projecttitle?: string | null
    projectarea?: string | null
    projectdescription?: string | null
    averagecpi?: number | null
    description?: string | null
    status?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    staff_projectgroup_convenerstaffidTostaff?: staffCreateNestedOneWithoutProjectgroup_projectgroup_convenerstaffidTostaffInput
    staff_projectgroup_expertstaffidTostaff?: staffCreateNestedOneWithoutProjectgroup_projectgroup_expertstaffidTostaffInput
    projecttype?: projecttypeCreateNestedOneWithoutProjectgroupInput
    projectgroupmember?: projectgroupmemberCreateNestedManyWithoutProjectgroupInput
    projectmeeting?: projectmeetingCreateNestedManyWithoutProjectgroupInput
  }

  export type projectgroupUncheckedCreateWithoutGradeInput = {
    projectgroupid?: number
    projecttypeid?: number | null
    projectgroupname?: string | null
    projecttitle?: string | null
    projectarea?: string | null
    projectdescription?: string | null
    averagecpi?: number | null
    description?: string | null
    convenerstaffid?: number | null
    expertstaffid?: number | null
    status?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    projectgroupmember?: projectgroupmemberUncheckedCreateNestedManyWithoutProjectgroupInput
    projectmeeting?: projectmeetingUncheckedCreateNestedManyWithoutProjectgroupInput
  }

  export type projectgroupCreateOrConnectWithoutGradeInput = {
    where: projectgroupWhereUniqueInput
    create: XOR<projectgroupCreateWithoutGradeInput, projectgroupUncheckedCreateWithoutGradeInput>
  }

  export type staffCreateWithoutGradeInput = {
    staffname: string
    phone?: string | null
    email: string
    password: string
    role?: string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    profileimage?: string | null
    projectgroup_projectgroup_convenerstaffidTostaff?: projectgroupCreateNestedManyWithoutStaff_projectgroup_convenerstaffidTostaffInput
    projectgroup_projectgroup_expertstaffidTostaff?: projectgroupCreateNestedManyWithoutStaff_projectgroup_expertstaffidTostaffInput
    projectmeeting?: projectmeetingCreateNestedManyWithoutStaffInput
    staff?: staffCreateNestedOneWithoutOther_staffInput
    other_staff?: staffCreateNestedManyWithoutStaffInput
    student?: studentCreateNestedManyWithoutStaffInput
    grouprequest?: grouprequestCreateNestedManyWithoutApproverInput
  }

  export type staffUncheckedCreateWithoutGradeInput = {
    staffid?: number
    staffname: string
    phone?: string | null
    email: string
    password: string
    role?: string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    registeredby?: number | null
    profileimage?: string | null
    projectgroup_projectgroup_convenerstaffidTostaff?: projectgroupUncheckedCreateNestedManyWithoutStaff_projectgroup_convenerstaffidTostaffInput
    projectgroup_projectgroup_expertstaffidTostaff?: projectgroupUncheckedCreateNestedManyWithoutStaff_projectgroup_expertstaffidTostaffInput
    projectmeeting?: projectmeetingUncheckedCreateNestedManyWithoutStaffInput
    other_staff?: staffUncheckedCreateNestedManyWithoutStaffInput
    student?: studentUncheckedCreateNestedManyWithoutStaffInput
    grouprequest?: grouprequestUncheckedCreateNestedManyWithoutApproverInput
  }

  export type staffCreateOrConnectWithoutGradeInput = {
    where: staffWhereUniqueInput
    create: XOR<staffCreateWithoutGradeInput, staffUncheckedCreateWithoutGradeInput>
  }

  export type projectgroupUpsertWithoutGradeInput = {
    update: XOR<projectgroupUpdateWithoutGradeInput, projectgroupUncheckedUpdateWithoutGradeInput>
    create: XOR<projectgroupCreateWithoutGradeInput, projectgroupUncheckedCreateWithoutGradeInput>
    where?: projectgroupWhereInput
  }

  export type projectgroupUpdateToOneWithWhereWithoutGradeInput = {
    where?: projectgroupWhereInput
    data: XOR<projectgroupUpdateWithoutGradeInput, projectgroupUncheckedUpdateWithoutGradeInput>
  }

  export type projectgroupUpdateWithoutGradeInput = {
    projectgroupname?: NullableStringFieldUpdateOperationsInput | string | null
    projecttitle?: NullableStringFieldUpdateOperationsInput | string | null
    projectarea?: NullableStringFieldUpdateOperationsInput | string | null
    projectdescription?: NullableStringFieldUpdateOperationsInput | string | null
    averagecpi?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staff_projectgroup_convenerstaffidTostaff?: staffUpdateOneWithoutProjectgroup_projectgroup_convenerstaffidTostaffNestedInput
    staff_projectgroup_expertstaffidTostaff?: staffUpdateOneWithoutProjectgroup_projectgroup_expertstaffidTostaffNestedInput
    projecttype?: projecttypeUpdateOneWithoutProjectgroupNestedInput
    projectgroupmember?: projectgroupmemberUpdateManyWithoutProjectgroupNestedInput
    projectmeeting?: projectmeetingUpdateManyWithoutProjectgroupNestedInput
  }

  export type projectgroupUncheckedUpdateWithoutGradeInput = {
    projectgroupid?: IntFieldUpdateOperationsInput | number
    projecttypeid?: NullableIntFieldUpdateOperationsInput | number | null
    projectgroupname?: NullableStringFieldUpdateOperationsInput | string | null
    projecttitle?: NullableStringFieldUpdateOperationsInput | string | null
    projectarea?: NullableStringFieldUpdateOperationsInput | string | null
    projectdescription?: NullableStringFieldUpdateOperationsInput | string | null
    averagecpi?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    convenerstaffid?: NullableIntFieldUpdateOperationsInput | number | null
    expertstaffid?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projectgroupmember?: projectgroupmemberUncheckedUpdateManyWithoutProjectgroupNestedInput
    projectmeeting?: projectmeetingUncheckedUpdateManyWithoutProjectgroupNestedInput
  }

  export type staffUpsertWithoutGradeInput = {
    update: XOR<staffUpdateWithoutGradeInput, staffUncheckedUpdateWithoutGradeInput>
    create: XOR<staffCreateWithoutGradeInput, staffUncheckedCreateWithoutGradeInput>
    where?: staffWhereInput
  }

  export type staffUpdateToOneWithWhereWithoutGradeInput = {
    where?: staffWhereInput
    data: XOR<staffUpdateWithoutGradeInput, staffUncheckedUpdateWithoutGradeInput>
  }

  export type staffUpdateWithoutGradeInput = {
    staffname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileimage?: NullableStringFieldUpdateOperationsInput | string | null
    projectgroup_projectgroup_convenerstaffidTostaff?: projectgroupUpdateManyWithoutStaff_projectgroup_convenerstaffidTostaffNestedInput
    projectgroup_projectgroup_expertstaffidTostaff?: projectgroupUpdateManyWithoutStaff_projectgroup_expertstaffidTostaffNestedInput
    projectmeeting?: projectmeetingUpdateManyWithoutStaffNestedInput
    staff?: staffUpdateOneWithoutOther_staffNestedInput
    other_staff?: staffUpdateManyWithoutStaffNestedInput
    student?: studentUpdateManyWithoutStaffNestedInput
    grouprequest?: grouprequestUpdateManyWithoutApproverNestedInput
  }

  export type staffUncheckedUpdateWithoutGradeInput = {
    staffid?: IntFieldUpdateOperationsInput | number
    staffname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registeredby?: NullableIntFieldUpdateOperationsInput | number | null
    profileimage?: NullableStringFieldUpdateOperationsInput | string | null
    projectgroup_projectgroup_convenerstaffidTostaff?: projectgroupUncheckedUpdateManyWithoutStaff_projectgroup_convenerstaffidTostaffNestedInput
    projectgroup_projectgroup_expertstaffidTostaff?: projectgroupUncheckedUpdateManyWithoutStaff_projectgroup_expertstaffidTostaffNestedInput
    projectmeeting?: projectmeetingUncheckedUpdateManyWithoutStaffNestedInput
    other_staff?: staffUncheckedUpdateManyWithoutStaffNestedInput
    student?: studentUncheckedUpdateManyWithoutStaffNestedInput
    grouprequest?: grouprequestUncheckedUpdateManyWithoutApproverNestedInput
  }

  export type projectgroupmemberCreateManyProjectgroupInput = {
    projectgroupmemberid?: number
    isgroupleader?: boolean | null
    studentcgpa?: number | null
    studentid?: number | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
  }

  export type projectmeetingCreateManyProjectgroupInput = {
    projectmeetingid?: number
    guidestaffid?: number | null
    meetingdatetime?: Date | string | null
    meetingpurpose?: string | null
    meetinglocation?: string | null
    meetingnotes?: string | null
    meetingstatus?: string | null
    meetingstatusdescription?: string | null
    meetingstatusdatetime?: Date | string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
  }

  export type gradeCreateManyProjectgroupInput = {
    gradeid?: number
    facultyid: number
    component: string
    marks: number
    maxmarks: number
    feedback?: string | null
    gradedat?: Date | string
    created?: Date | string
    modified?: Date | string
  }

  export type projectgroupmemberUpdateWithoutProjectgroupInput = {
    isgroupleader?: NullableBoolFieldUpdateOperationsInput | boolean | null
    studentcgpa?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: studentUpdateOneWithoutProjectgroupmemberNestedInput
  }

  export type projectgroupmemberUncheckedUpdateWithoutProjectgroupInput = {
    projectgroupmemberid?: IntFieldUpdateOperationsInput | number
    isgroupleader?: NullableBoolFieldUpdateOperationsInput | boolean | null
    studentcgpa?: NullableFloatFieldUpdateOperationsInput | number | null
    studentid?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectgroupmemberUncheckedUpdateManyWithoutProjectgroupInput = {
    projectgroupmemberid?: IntFieldUpdateOperationsInput | number
    isgroupleader?: NullableBoolFieldUpdateOperationsInput | boolean | null
    studentcgpa?: NullableFloatFieldUpdateOperationsInput | number | null
    studentid?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectmeetingUpdateWithoutProjectgroupInput = {
    meetingdatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetingpurpose?: NullableStringFieldUpdateOperationsInput | string | null
    meetinglocation?: NullableStringFieldUpdateOperationsInput | string | null
    meetingnotes?: NullableStringFieldUpdateOperationsInput | string | null
    meetingstatus?: NullableStringFieldUpdateOperationsInput | string | null
    meetingstatusdescription?: NullableStringFieldUpdateOperationsInput | string | null
    meetingstatusdatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staff?: staffUpdateOneWithoutProjectmeetingNestedInput
    projectmeetingattendance?: projectmeetingattendanceUpdateManyWithoutProjectmeetingNestedInput
  }

  export type projectmeetingUncheckedUpdateWithoutProjectgroupInput = {
    projectmeetingid?: IntFieldUpdateOperationsInput | number
    guidestaffid?: NullableIntFieldUpdateOperationsInput | number | null
    meetingdatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetingpurpose?: NullableStringFieldUpdateOperationsInput | string | null
    meetinglocation?: NullableStringFieldUpdateOperationsInput | string | null
    meetingnotes?: NullableStringFieldUpdateOperationsInput | string | null
    meetingstatus?: NullableStringFieldUpdateOperationsInput | string | null
    meetingstatusdescription?: NullableStringFieldUpdateOperationsInput | string | null
    meetingstatusdatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projectmeetingattendance?: projectmeetingattendanceUncheckedUpdateManyWithoutProjectmeetingNestedInput
  }

  export type projectmeetingUncheckedUpdateManyWithoutProjectgroupInput = {
    projectmeetingid?: IntFieldUpdateOperationsInput | number
    guidestaffid?: NullableIntFieldUpdateOperationsInput | number | null
    meetingdatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetingpurpose?: NullableStringFieldUpdateOperationsInput | string | null
    meetinglocation?: NullableStringFieldUpdateOperationsInput | string | null
    meetingnotes?: NullableStringFieldUpdateOperationsInput | string | null
    meetingstatus?: NullableStringFieldUpdateOperationsInput | string | null
    meetingstatusdescription?: NullableStringFieldUpdateOperationsInput | string | null
    meetingstatusdatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type gradeUpdateWithoutProjectgroupInput = {
    component?: StringFieldUpdateOperationsInput | string
    marks?: FloatFieldUpdateOperationsInput | number
    maxmarks?: FloatFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradedat?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: staffUpdateOneRequiredWithoutGradeNestedInput
  }

  export type gradeUncheckedUpdateWithoutProjectgroupInput = {
    gradeid?: IntFieldUpdateOperationsInput | number
    facultyid?: IntFieldUpdateOperationsInput | number
    component?: StringFieldUpdateOperationsInput | string
    marks?: FloatFieldUpdateOperationsInput | number
    maxmarks?: FloatFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradedat?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gradeUncheckedUpdateManyWithoutProjectgroupInput = {
    gradeid?: IntFieldUpdateOperationsInput | number
    facultyid?: IntFieldUpdateOperationsInput | number
    component?: StringFieldUpdateOperationsInput | string
    marks?: FloatFieldUpdateOperationsInput | number
    maxmarks?: FloatFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradedat?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectmeetingattendanceCreateManyProjectmeetingInput = {
    projectmeetingattendanceid?: number
    studentid?: number | null
    ispresent?: boolean | null
    attendanceremarks?: string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
  }

  export type projectmeetingattendanceUpdateWithoutProjectmeetingInput = {
    ispresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    attendanceremarks?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: studentUpdateOneWithoutProjectmeetingattendanceNestedInput
  }

  export type projectmeetingattendanceUncheckedUpdateWithoutProjectmeetingInput = {
    projectmeetingattendanceid?: IntFieldUpdateOperationsInput | number
    studentid?: NullableIntFieldUpdateOperationsInput | number | null
    ispresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    attendanceremarks?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectmeetingattendanceUncheckedUpdateManyWithoutProjectmeetingInput = {
    projectmeetingattendanceid?: IntFieldUpdateOperationsInput | number
    studentid?: NullableIntFieldUpdateOperationsInput | number | null
    ispresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    attendanceremarks?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectgroupCreateManyProjecttypeInput = {
    projectgroupid?: number
    projectgroupname?: string | null
    projecttitle?: string | null
    projectarea?: string | null
    projectdescription?: string | null
    averagecpi?: number | null
    description?: string | null
    convenerstaffid?: number | null
    expertstaffid?: number | null
    status?: string | null
    created?: Date | string | null
    modified?: Date | string | null
  }

  export type projectgroupUpdateWithoutProjecttypeInput = {
    projectgroupname?: NullableStringFieldUpdateOperationsInput | string | null
    projecttitle?: NullableStringFieldUpdateOperationsInput | string | null
    projectarea?: NullableStringFieldUpdateOperationsInput | string | null
    projectdescription?: NullableStringFieldUpdateOperationsInput | string | null
    averagecpi?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staff_projectgroup_convenerstaffidTostaff?: staffUpdateOneWithoutProjectgroup_projectgroup_convenerstaffidTostaffNestedInput
    staff_projectgroup_expertstaffidTostaff?: staffUpdateOneWithoutProjectgroup_projectgroup_expertstaffidTostaffNestedInput
    projectgroupmember?: projectgroupmemberUpdateManyWithoutProjectgroupNestedInput
    projectmeeting?: projectmeetingUpdateManyWithoutProjectgroupNestedInput
    grade?: gradeUpdateManyWithoutProjectgroupNestedInput
  }

  export type projectgroupUncheckedUpdateWithoutProjecttypeInput = {
    projectgroupid?: IntFieldUpdateOperationsInput | number
    projectgroupname?: NullableStringFieldUpdateOperationsInput | string | null
    projecttitle?: NullableStringFieldUpdateOperationsInput | string | null
    projectarea?: NullableStringFieldUpdateOperationsInput | string | null
    projectdescription?: NullableStringFieldUpdateOperationsInput | string | null
    averagecpi?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    convenerstaffid?: NullableIntFieldUpdateOperationsInput | number | null
    expertstaffid?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projectgroupmember?: projectgroupmemberUncheckedUpdateManyWithoutProjectgroupNestedInput
    projectmeeting?: projectmeetingUncheckedUpdateManyWithoutProjectgroupNestedInput
    grade?: gradeUncheckedUpdateManyWithoutProjectgroupNestedInput
  }

  export type projectgroupUncheckedUpdateManyWithoutProjecttypeInput = {
    projectgroupid?: IntFieldUpdateOperationsInput | number
    projectgroupname?: NullableStringFieldUpdateOperationsInput | string | null
    projecttitle?: NullableStringFieldUpdateOperationsInput | string | null
    projectarea?: NullableStringFieldUpdateOperationsInput | string | null
    projectdescription?: NullableStringFieldUpdateOperationsInput | string | null
    averagecpi?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    convenerstaffid?: NullableIntFieldUpdateOperationsInput | number | null
    expertstaffid?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectgroupCreateManyStaff_projectgroup_convenerstaffidTostaffInput = {
    projectgroupid?: number
    projecttypeid?: number | null
    projectgroupname?: string | null
    projecttitle?: string | null
    projectarea?: string | null
    projectdescription?: string | null
    averagecpi?: number | null
    description?: string | null
    expertstaffid?: number | null
    status?: string | null
    created?: Date | string | null
    modified?: Date | string | null
  }

  export type projectgroupCreateManyStaff_projectgroup_expertstaffidTostaffInput = {
    projectgroupid?: number
    projecttypeid?: number | null
    projectgroupname?: string | null
    projecttitle?: string | null
    projectarea?: string | null
    projectdescription?: string | null
    averagecpi?: number | null
    description?: string | null
    convenerstaffid?: number | null
    status?: string | null
    created?: Date | string | null
    modified?: Date | string | null
  }

  export type projectmeetingCreateManyStaffInput = {
    projectmeetingid?: number
    projectgroupid?: number | null
    meetingdatetime?: Date | string | null
    meetingpurpose?: string | null
    meetinglocation?: string | null
    meetingnotes?: string | null
    meetingstatus?: string | null
    meetingstatusdescription?: string | null
    meetingstatusdatetime?: Date | string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
  }

  export type staffCreateManyStaffInput = {
    staffid?: number
    staffname: string
    phone?: string | null
    email: string
    password: string
    role?: string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    profileimage?: string | null
  }

  export type studentCreateManyStaffInput = {
    studentid?: number
    studentname: string
    phone?: string | null
    email: string
    password: string
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
    profileimage?: string | null
  }

  export type grouprequestCreateManyApproverInput = {
    requestid?: number
    groupname: string
    projecttitle: string
    projectarea?: string | null
    projectdescription?: string | null
    technologies?: string | null
    leaderid: number
    memberdata: string
    status?: string
    rejectionreason?: string | null
    created?: Date | string
    modified?: Date | string
  }

  export type gradeCreateManyStaffInput = {
    gradeid?: number
    projectgroupid: number
    component: string
    marks: number
    maxmarks: number
    feedback?: string | null
    gradedat?: Date | string
    created?: Date | string
    modified?: Date | string
  }

  export type projectgroupUpdateWithoutStaff_projectgroup_convenerstaffidTostaffInput = {
    projectgroupname?: NullableStringFieldUpdateOperationsInput | string | null
    projecttitle?: NullableStringFieldUpdateOperationsInput | string | null
    projectarea?: NullableStringFieldUpdateOperationsInput | string | null
    projectdescription?: NullableStringFieldUpdateOperationsInput | string | null
    averagecpi?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staff_projectgroup_expertstaffidTostaff?: staffUpdateOneWithoutProjectgroup_projectgroup_expertstaffidTostaffNestedInput
    projecttype?: projecttypeUpdateOneWithoutProjectgroupNestedInput
    projectgroupmember?: projectgroupmemberUpdateManyWithoutProjectgroupNestedInput
    projectmeeting?: projectmeetingUpdateManyWithoutProjectgroupNestedInput
    grade?: gradeUpdateManyWithoutProjectgroupNestedInput
  }

  export type projectgroupUncheckedUpdateWithoutStaff_projectgroup_convenerstaffidTostaffInput = {
    projectgroupid?: IntFieldUpdateOperationsInput | number
    projecttypeid?: NullableIntFieldUpdateOperationsInput | number | null
    projectgroupname?: NullableStringFieldUpdateOperationsInput | string | null
    projecttitle?: NullableStringFieldUpdateOperationsInput | string | null
    projectarea?: NullableStringFieldUpdateOperationsInput | string | null
    projectdescription?: NullableStringFieldUpdateOperationsInput | string | null
    averagecpi?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    expertstaffid?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projectgroupmember?: projectgroupmemberUncheckedUpdateManyWithoutProjectgroupNestedInput
    projectmeeting?: projectmeetingUncheckedUpdateManyWithoutProjectgroupNestedInput
    grade?: gradeUncheckedUpdateManyWithoutProjectgroupNestedInput
  }

  export type projectgroupUncheckedUpdateManyWithoutStaff_projectgroup_convenerstaffidTostaffInput = {
    projectgroupid?: IntFieldUpdateOperationsInput | number
    projecttypeid?: NullableIntFieldUpdateOperationsInput | number | null
    projectgroupname?: NullableStringFieldUpdateOperationsInput | string | null
    projecttitle?: NullableStringFieldUpdateOperationsInput | string | null
    projectarea?: NullableStringFieldUpdateOperationsInput | string | null
    projectdescription?: NullableStringFieldUpdateOperationsInput | string | null
    averagecpi?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    expertstaffid?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectgroupUpdateWithoutStaff_projectgroup_expertstaffidTostaffInput = {
    projectgroupname?: NullableStringFieldUpdateOperationsInput | string | null
    projecttitle?: NullableStringFieldUpdateOperationsInput | string | null
    projectarea?: NullableStringFieldUpdateOperationsInput | string | null
    projectdescription?: NullableStringFieldUpdateOperationsInput | string | null
    averagecpi?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staff_projectgroup_convenerstaffidTostaff?: staffUpdateOneWithoutProjectgroup_projectgroup_convenerstaffidTostaffNestedInput
    projecttype?: projecttypeUpdateOneWithoutProjectgroupNestedInput
    projectgroupmember?: projectgroupmemberUpdateManyWithoutProjectgroupNestedInput
    projectmeeting?: projectmeetingUpdateManyWithoutProjectgroupNestedInput
    grade?: gradeUpdateManyWithoutProjectgroupNestedInput
  }

  export type projectgroupUncheckedUpdateWithoutStaff_projectgroup_expertstaffidTostaffInput = {
    projectgroupid?: IntFieldUpdateOperationsInput | number
    projecttypeid?: NullableIntFieldUpdateOperationsInput | number | null
    projectgroupname?: NullableStringFieldUpdateOperationsInput | string | null
    projecttitle?: NullableStringFieldUpdateOperationsInput | string | null
    projectarea?: NullableStringFieldUpdateOperationsInput | string | null
    projectdescription?: NullableStringFieldUpdateOperationsInput | string | null
    averagecpi?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    convenerstaffid?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projectgroupmember?: projectgroupmemberUncheckedUpdateManyWithoutProjectgroupNestedInput
    projectmeeting?: projectmeetingUncheckedUpdateManyWithoutProjectgroupNestedInput
    grade?: gradeUncheckedUpdateManyWithoutProjectgroupNestedInput
  }

  export type projectgroupUncheckedUpdateManyWithoutStaff_projectgroup_expertstaffidTostaffInput = {
    projectgroupid?: IntFieldUpdateOperationsInput | number
    projecttypeid?: NullableIntFieldUpdateOperationsInput | number | null
    projectgroupname?: NullableStringFieldUpdateOperationsInput | string | null
    projecttitle?: NullableStringFieldUpdateOperationsInput | string | null
    projectarea?: NullableStringFieldUpdateOperationsInput | string | null
    projectdescription?: NullableStringFieldUpdateOperationsInput | string | null
    averagecpi?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    convenerstaffid?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectmeetingUpdateWithoutStaffInput = {
    meetingdatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetingpurpose?: NullableStringFieldUpdateOperationsInput | string | null
    meetinglocation?: NullableStringFieldUpdateOperationsInput | string | null
    meetingnotes?: NullableStringFieldUpdateOperationsInput | string | null
    meetingstatus?: NullableStringFieldUpdateOperationsInput | string | null
    meetingstatusdescription?: NullableStringFieldUpdateOperationsInput | string | null
    meetingstatusdatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projectgroup?: projectgroupUpdateOneWithoutProjectmeetingNestedInput
    projectmeetingattendance?: projectmeetingattendanceUpdateManyWithoutProjectmeetingNestedInput
  }

  export type projectmeetingUncheckedUpdateWithoutStaffInput = {
    projectmeetingid?: IntFieldUpdateOperationsInput | number
    projectgroupid?: NullableIntFieldUpdateOperationsInput | number | null
    meetingdatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetingpurpose?: NullableStringFieldUpdateOperationsInput | string | null
    meetinglocation?: NullableStringFieldUpdateOperationsInput | string | null
    meetingnotes?: NullableStringFieldUpdateOperationsInput | string | null
    meetingstatus?: NullableStringFieldUpdateOperationsInput | string | null
    meetingstatusdescription?: NullableStringFieldUpdateOperationsInput | string | null
    meetingstatusdatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projectmeetingattendance?: projectmeetingattendanceUncheckedUpdateManyWithoutProjectmeetingNestedInput
  }

  export type projectmeetingUncheckedUpdateManyWithoutStaffInput = {
    projectmeetingid?: IntFieldUpdateOperationsInput | number
    projectgroupid?: NullableIntFieldUpdateOperationsInput | number | null
    meetingdatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetingpurpose?: NullableStringFieldUpdateOperationsInput | string | null
    meetinglocation?: NullableStringFieldUpdateOperationsInput | string | null
    meetingnotes?: NullableStringFieldUpdateOperationsInput | string | null
    meetingstatus?: NullableStringFieldUpdateOperationsInput | string | null
    meetingstatusdescription?: NullableStringFieldUpdateOperationsInput | string | null
    meetingstatusdatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type staffUpdateWithoutStaffInput = {
    staffname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileimage?: NullableStringFieldUpdateOperationsInput | string | null
    projectgroup_projectgroup_convenerstaffidTostaff?: projectgroupUpdateManyWithoutStaff_projectgroup_convenerstaffidTostaffNestedInput
    projectgroup_projectgroup_expertstaffidTostaff?: projectgroupUpdateManyWithoutStaff_projectgroup_expertstaffidTostaffNestedInput
    projectmeeting?: projectmeetingUpdateManyWithoutStaffNestedInput
    other_staff?: staffUpdateManyWithoutStaffNestedInput
    student?: studentUpdateManyWithoutStaffNestedInput
    grouprequest?: grouprequestUpdateManyWithoutApproverNestedInput
    grade?: gradeUpdateManyWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateWithoutStaffInput = {
    staffid?: IntFieldUpdateOperationsInput | number
    staffname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileimage?: NullableStringFieldUpdateOperationsInput | string | null
    projectgroup_projectgroup_convenerstaffidTostaff?: projectgroupUncheckedUpdateManyWithoutStaff_projectgroup_convenerstaffidTostaffNestedInput
    projectgroup_projectgroup_expertstaffidTostaff?: projectgroupUncheckedUpdateManyWithoutStaff_projectgroup_expertstaffidTostaffNestedInput
    projectmeeting?: projectmeetingUncheckedUpdateManyWithoutStaffNestedInput
    other_staff?: staffUncheckedUpdateManyWithoutStaffNestedInput
    student?: studentUncheckedUpdateManyWithoutStaffNestedInput
    grouprequest?: grouprequestUncheckedUpdateManyWithoutApproverNestedInput
    grade?: gradeUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateManyWithoutStaffInput = {
    staffid?: IntFieldUpdateOperationsInput | number
    staffname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileimage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type studentUpdateWithoutStaffInput = {
    studentname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileimage?: NullableStringFieldUpdateOperationsInput | string | null
    projectgroupmember?: projectgroupmemberUpdateManyWithoutStudentNestedInput
    projectmeetingattendance?: projectmeetingattendanceUpdateManyWithoutStudentNestedInput
    grouprequest?: grouprequestUpdateManyWithoutLeaderNestedInput
  }

  export type studentUncheckedUpdateWithoutStaffInput = {
    studentid?: IntFieldUpdateOperationsInput | number
    studentname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileimage?: NullableStringFieldUpdateOperationsInput | string | null
    projectgroupmember?: projectgroupmemberUncheckedUpdateManyWithoutStudentNestedInput
    projectmeetingattendance?: projectmeetingattendanceUncheckedUpdateManyWithoutStudentNestedInput
    grouprequest?: grouprequestUncheckedUpdateManyWithoutLeaderNestedInput
  }

  export type studentUncheckedUpdateManyWithoutStaffInput = {
    studentid?: IntFieldUpdateOperationsInput | number
    studentname?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    profileimage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type grouprequestUpdateWithoutApproverInput = {
    groupname?: StringFieldUpdateOperationsInput | string
    projecttitle?: StringFieldUpdateOperationsInput | string
    projectarea?: NullableStringFieldUpdateOperationsInput | string | null
    projectdescription?: NullableStringFieldUpdateOperationsInput | string | null
    technologies?: NullableStringFieldUpdateOperationsInput | string | null
    memberdata?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionreason?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    leader?: studentUpdateOneRequiredWithoutGrouprequestNestedInput
  }

  export type grouprequestUncheckedUpdateWithoutApproverInput = {
    requestid?: IntFieldUpdateOperationsInput | number
    groupname?: StringFieldUpdateOperationsInput | string
    projecttitle?: StringFieldUpdateOperationsInput | string
    projectarea?: NullableStringFieldUpdateOperationsInput | string | null
    projectdescription?: NullableStringFieldUpdateOperationsInput | string | null
    technologies?: NullableStringFieldUpdateOperationsInput | string | null
    leaderid?: IntFieldUpdateOperationsInput | number
    memberdata?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionreason?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type grouprequestUncheckedUpdateManyWithoutApproverInput = {
    requestid?: IntFieldUpdateOperationsInput | number
    groupname?: StringFieldUpdateOperationsInput | string
    projecttitle?: StringFieldUpdateOperationsInput | string
    projectarea?: NullableStringFieldUpdateOperationsInput | string | null
    projectdescription?: NullableStringFieldUpdateOperationsInput | string | null
    technologies?: NullableStringFieldUpdateOperationsInput | string | null
    leaderid?: IntFieldUpdateOperationsInput | number
    memberdata?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionreason?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gradeUpdateWithoutStaffInput = {
    component?: StringFieldUpdateOperationsInput | string
    marks?: FloatFieldUpdateOperationsInput | number
    maxmarks?: FloatFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradedat?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    projectgroup?: projectgroupUpdateOneRequiredWithoutGradeNestedInput
  }

  export type gradeUncheckedUpdateWithoutStaffInput = {
    gradeid?: IntFieldUpdateOperationsInput | number
    projectgroupid?: IntFieldUpdateOperationsInput | number
    component?: StringFieldUpdateOperationsInput | string
    marks?: FloatFieldUpdateOperationsInput | number
    maxmarks?: FloatFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradedat?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gradeUncheckedUpdateManyWithoutStaffInput = {
    gradeid?: IntFieldUpdateOperationsInput | number
    projectgroupid?: IntFieldUpdateOperationsInput | number
    component?: StringFieldUpdateOperationsInput | string
    marks?: FloatFieldUpdateOperationsInput | number
    maxmarks?: FloatFieldUpdateOperationsInput | number
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    gradedat?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectgroupmemberCreateManyStudentInput = {
    projectgroupmemberid?: number
    isgroupleader?: boolean | null
    studentcgpa?: number | null
    projectgroupid?: number | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
  }

  export type projectmeetingattendanceCreateManyStudentInput = {
    projectmeetingattendanceid?: number
    projectmeetingid?: number | null
    ispresent?: boolean | null
    attendanceremarks?: string | null
    description?: string | null
    created?: Date | string | null
    modified?: Date | string | null
  }

  export type grouprequestCreateManyLeaderInput = {
    requestid?: number
    groupname: string
    projecttitle: string
    projectarea?: string | null
    projectdescription?: string | null
    technologies?: string | null
    memberdata: string
    status?: string
    rejectionreason?: string | null
    created?: Date | string
    modified?: Date | string
    approvedby?: number | null
  }

  export type projectgroupmemberUpdateWithoutStudentInput = {
    isgroupleader?: NullableBoolFieldUpdateOperationsInput | boolean | null
    studentcgpa?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projectgroup?: projectgroupUpdateOneWithoutProjectgroupmemberNestedInput
  }

  export type projectgroupmemberUncheckedUpdateWithoutStudentInput = {
    projectgroupmemberid?: IntFieldUpdateOperationsInput | number
    isgroupleader?: NullableBoolFieldUpdateOperationsInput | boolean | null
    studentcgpa?: NullableFloatFieldUpdateOperationsInput | number | null
    projectgroupid?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectgroupmemberUncheckedUpdateManyWithoutStudentInput = {
    projectgroupmemberid?: IntFieldUpdateOperationsInput | number
    isgroupleader?: NullableBoolFieldUpdateOperationsInput | boolean | null
    studentcgpa?: NullableFloatFieldUpdateOperationsInput | number | null
    projectgroupid?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectmeetingattendanceUpdateWithoutStudentInput = {
    ispresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    attendanceremarks?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projectmeeting?: projectmeetingUpdateOneWithoutProjectmeetingattendanceNestedInput
  }

  export type projectmeetingattendanceUncheckedUpdateWithoutStudentInput = {
    projectmeetingattendanceid?: IntFieldUpdateOperationsInput | number
    projectmeetingid?: NullableIntFieldUpdateOperationsInput | number | null
    ispresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    attendanceremarks?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type projectmeetingattendanceUncheckedUpdateManyWithoutStudentInput = {
    projectmeetingattendanceid?: IntFieldUpdateOperationsInput | number
    projectmeetingid?: NullableIntFieldUpdateOperationsInput | number | null
    ispresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    attendanceremarks?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type grouprequestUpdateWithoutLeaderInput = {
    groupname?: StringFieldUpdateOperationsInput | string
    projecttitle?: StringFieldUpdateOperationsInput | string
    projectarea?: NullableStringFieldUpdateOperationsInput | string | null
    projectdescription?: NullableStringFieldUpdateOperationsInput | string | null
    technologies?: NullableStringFieldUpdateOperationsInput | string | null
    memberdata?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionreason?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    approver?: staffUpdateOneWithoutGrouprequestNestedInput
  }

  export type grouprequestUncheckedUpdateWithoutLeaderInput = {
    requestid?: IntFieldUpdateOperationsInput | number
    groupname?: StringFieldUpdateOperationsInput | string
    projecttitle?: StringFieldUpdateOperationsInput | string
    projectarea?: NullableStringFieldUpdateOperationsInput | string | null
    projectdescription?: NullableStringFieldUpdateOperationsInput | string | null
    technologies?: NullableStringFieldUpdateOperationsInput | string | null
    memberdata?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionreason?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedby?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type grouprequestUncheckedUpdateManyWithoutLeaderInput = {
    requestid?: IntFieldUpdateOperationsInput | number
    groupname?: StringFieldUpdateOperationsInput | string
    projecttitle?: StringFieldUpdateOperationsInput | string
    projectarea?: NullableStringFieldUpdateOperationsInput | string | null
    projectdescription?: NullableStringFieldUpdateOperationsInput | string | null
    technologies?: NullableStringFieldUpdateOperationsInput | string | null
    memberdata?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionreason?: NullableStringFieldUpdateOperationsInput | string | null
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    modified?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedby?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}