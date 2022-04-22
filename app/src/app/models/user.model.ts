import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class user {
  @JsonProperty('firstName', String, true)
  public firstName: string = undefined;

  @JsonProperty('lastName', String, true)
  public lastName: string = undefined;

  @JsonProperty('email', String, true)
  public email: string = undefined;

  @JsonProperty('password', String, true)
  public password: string = undefined;

  @JsonProperty('canBook', Boolean, true)
  public canBook: boolean = undefined;

}