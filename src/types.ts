export type Device = {
  name: string
  type: string
  size: {
    height: number
    width: number
  }
}

export type Devices = Device[]

export type Url = string
