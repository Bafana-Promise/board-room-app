import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class bookingdm {
  @JsonProperty('roomNum', String, true)
  public roomNum: string = undefined;

  @JsonProperty('date', String, true)
  public date: string = undefined;

  @JsonProperty('time', String, true)
  public time: string = undefined;

  @JsonProperty('status', Boolean, true)
  public status: boolean = undefined;

}