import { ref } from "vue";
import { TMap } from "../Type";
import { Time } from "@/libs/Time";

abstract class Entity {
    constructor(options: TMap.IEntity) {
        this.options = options
        this.type = "Entity"
    }

    public type!: string

    public root!: Cesium.Entity

    public options!: TMap.IEntity

    public show = ref<boolean>(false)

    /**
     * 自身唯一id
     */
    public id = Time.GenerateRandomUid()

    /**
     * 用来确保父子关系
     */
    public get uid(): string {
        if (this.options.parent) {
            return this.options.parent.uid
        }
        else {
            return this.id
        }
    }

    /**
     * 生成函数默认调用
     */
    public abstract CreateRoot(): void

    public abstract Show(): void

    public abstract Hide(): void

    public abstract Destroy(): void

    /**
     * 鼠标左键点击时
     */
    public OnClick(e: Cesium.Cartesian3, id: string, name: string) {

    }

    /**
     * 鼠标左键按住选中拖拽开始时
     */
    public OnDraggingStart(e: Cesium.Cartesian3, id: string, name: string) {

    }

    /**
     * 鼠标左键按住选中拖拽时
     */
    public OnDragging(e: Cesium.Cartesian3, id: string, name: string) {

    }

    /**
     * 鼠标左键按住选中拖拽结束时
     */
    public OnDraggingEnd(e: Cesium.Cartesian3, id: string, name: string) {

    }

    /**
     * 鼠标左键按下时
     */
    public OnMouseDown(e: Cesium.Cartesian3, id: string, name: string) {

    }

    /**
     * 鼠标左键松开时
     */
    public OnMouseUp(e: Cesium.Cartesian3, id: string, name: string) {

    }

}

export { Entity }