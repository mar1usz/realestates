import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerRealEstate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RealEstate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly lastUpdateDate: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRealEstate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RealEstate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly lastUpdateDate: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RealEstate = LazyLoading extends LazyLoadingDisabled ? EagerRealEstate : LazyRealEstate

export declare const RealEstate: (new (init: ModelInit<RealEstate>) => RealEstate) & {
  copyOf(source: RealEstate, mutator: (draft: MutableModel<RealEstate>) => MutableModel<RealEstate> | void): RealEstate;
}