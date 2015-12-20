THREE.RenderableObject=function(){this.id=0,this.object=null,this.z=0,this.renderOrder=0},THREE.RenderableFace=function(){this.id=0,this.v1=new THREE.RenderableVertex,this.v2=new THREE.RenderableVertex,this.v3=new THREE.RenderableVertex,this.normalModel=new THREE.Vector3,this.vertexNormalsModel=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3],this.vertexNormalsLength=0,this.color=new THREE.Color,this.material=null,this.uvs=[new THREE.Vector2,new THREE.Vector2,new THREE.Vector2],this.z=0,this.renderOrder=0},THREE.RenderableVertex=function(){this.position=new THREE.Vector3,this.positionWorld=new THREE.Vector3,this.positionScreen=new THREE.Vector4,this.visible=!0},THREE.RenderableVertex.prototype.copy=function(a){this.positionWorld.copy(a.positionWorld),this.positionScreen.copy(a.positionScreen)},THREE.RenderableLine=function(){this.id=0,this.v1=new THREE.RenderableVertex,this.v2=new THREE.RenderableVertex,this.vertexColors=[new THREE.Color,new THREE.Color],this.material=null,this.z=0,this.renderOrder=0},THREE.RenderableSprite=function(){this.id=0,this.object=null,this.x=0,this.y=0,this.z=0,this.rotation=0,this.scale=new THREE.Vector2,this.material=null,this.renderOrder=0},THREE.Projector=function(){function L(){if(b===d){var a=new THREE.RenderableObject;return c.push(a),d++,b++,a}return c[b++]}function M(){if(f===h){var a=new THREE.RenderableVertex;return g.push(a),h++,f++,a}return g[f++]}function N(){if(j===l){var a=new THREE.RenderableFace;return k.push(a),l++,j++,a}return k[j++]}function O(){if(n===p){var a=new THREE.RenderableLine;return o.push(a),p++,n++,a}return o[n++]}function P(){if(r===t){var a=new THREE.RenderableSprite;return s.push(a),t++,r++,a}return s[r++]}function Q(a,b){return a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.z!==b.z?b.z-a.z:a.id!==b.id?a.id-b.id:0}function R(a,b){var c=0,d=1,e=a.z+a.w,f=b.z+b.w,g=-a.z+a.w,h=-b.z+b.w;return e>=0&&f>=0&&g>=0&&h>=0?!0:0>e&&0>f||0>g&&0>h?!1:(0>e?c=Math.max(c,e/(e-f)):0>f&&(d=Math.min(d,e/(e-f))),0>g?c=Math.max(c,g/(g-h)):0>h&&(d=Math.min(d,g/(g-h))),c>d?!1:(a.lerp(b,c),b.lerp(a,1-d),!0))}var a,b,e,f,i,j,m,n,q,r,D,c=[],d=0,g=[],h=0,k=[],l=0,o=[],p=0,s=[],t=0,u={objects:[],lights:[],elements:[]},v=new THREE.Vector3,w=new THREE.Vector4,x=new THREE.Box3(new THREE.Vector3(-1,-1,-1),new THREE.Vector3(1,1,1)),y=new THREE.Box3,z=new Array(3),B=(new Array(4),new THREE.Matrix4),C=new THREE.Matrix4,E=new THREE.Matrix4,F=new THREE.Matrix3,G=new THREE.Frustum,H=new THREE.Vector4,I=new THREE.Vector4;this.projectVector=function(a,b){console.warn("THREE.Projector: .projectVector() is now vector.project()."),a.project(b)},this.unprojectVector=function(a,b){console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."),a.unproject(b)},this.pickingRay=function(a,b){console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")};var J=function(){var a=[],b=[],c=null,d=null,f=new THREE.Matrix3,h=function(e){c=e,d=c.material,f.getNormalMatrix(c.matrixWorld),a.length=0,b.length=0},j=function(a){var b=a.position,c=a.positionWorld,d=a.positionScreen;c.copy(b).applyMatrix4(D),d.copy(c).applyMatrix4(C);var e=1/d.w;d.x*=e,d.y*=e,d.z*=e,a.visible=d.x>=-1&&d.x<=1&&d.y>=-1&&d.y<=1&&d.z>=-1&&d.z<=1},k=function(a,b,c){e=M(),e.position.set(a,b,c),j(e)},l=function(b,c,d){a.push(b,c,d)},n=function(a,c){b.push(a,c)},o=function(a,b,c){return a.visible===!0||b.visible===!0||c.visible===!0?!0:(z[0]=a.positionScreen,z[1]=b.positionScreen,z[2]=c.positionScreen,x.isIntersectionBox(y.setFromPoints(z)))},p=function(a,b,c){return(c.positionScreen.x-a.positionScreen.x)*(b.positionScreen.y-a.positionScreen.y)-(c.positionScreen.y-a.positionScreen.y)*(b.positionScreen.x-a.positionScreen.x)<0},q=function(a,b){var d=g[a],e=g[b];m=O(),m.id=c.id,m.v1.copy(d),m.v2.copy(e),m.z=(d.positionScreen.z+e.positionScreen.z)/2,m.renderOrder=c.renderOrder,m.material=c.material,u.elements.push(m)},r=function(e,h,j){var k=g[e],l=g[h],m=g[j];if(o(k,l,m)!==!1&&(d.side===THREE.DoubleSide||p(k,l,m)===!0)){i=N(),i.id=c.id,i.v1.copy(k),i.v2.copy(l),i.v3.copy(m),i.z=(k.positionScreen.z+l.positionScreen.z+m.positionScreen.z)/3,i.renderOrder=c.renderOrder,i.normalModel.fromArray(a,3*e),i.normalModel.applyMatrix3(f).normalize();for(var n=0;3>n;n++){var q=i.vertexNormalsModel[n];q.fromArray(a,3*arguments[n]),q.applyMatrix3(f).normalize();var r=i.uvs[n];r.fromArray(b,2*arguments[n])}i.vertexNormalsLength=3,i.material=c.material,u.elements.push(i)}};return{setObject:h,projectVertex:j,checkTriangleVisibility:o,checkBackfaceCulling:p,pushVertex:k,pushNormal:l,pushUv:n,pushLine:q,pushTriangle:r}},K=new J;this.projectScene=function(c,d,e,h){j=0,n=0,r=0,u.elements.length=0,c.autoUpdate===!0&&c.updateMatrixWorld(),null===d.parent&&d.updateMatrixWorld(),B.copy(d.matrixWorldInverse.getInverse(d.matrixWorld)),C.multiplyMatrices(d.projectionMatrix,B),G.setFromMatrix(C),b=0,u.objects.length=0,u.lights.length=0,c.traverseVisible(function(b){if(b instanceof THREE.Light)u.lights.push(b);else if(b instanceof THREE.Mesh||b instanceof THREE.Line||b instanceof THREE.Sprite){var c=b.material;if(c.visible===!1)return;(b.frustumCulled===!1||G.intersectsObject(b)===!0)&&(a=L(),a.id=b.id,a.object=b,v.setFromMatrixPosition(b.matrixWorld),v.applyProjection(C),a.z=v.z,a.renderOrder=b.renderOrder,u.objects.push(a))}}),e===!0&&u.objects.sort(Q);for(var k=0,l=u.objects.length;l>k;k++){var o=u.objects[k].object,p=o.geometry;if(K.setObject(o),D=o.matrixWorld,f=0,o instanceof THREE.Mesh){if(p instanceof THREE.BufferGeometry){var s=p.attributes,t=p.groups;if(void 0===s.position)continue;for(var x=s.position.array,y=0,z=x.length;z>y;y+=3)K.pushVertex(x[y],x[y+1],x[y+2]);if(void 0!==s.normal)for(var A=s.normal.array,y=0,z=A.length;z>y;y+=3)K.pushNormal(A[y],A[y+1],A[y+2]);if(void 0!==s.uv)for(var J=s.uv.array,y=0,z=J.length;z>y;y+=2)K.pushUv(J[y],J[y+1]);if(null!==p.index){var S=p.index.array;if(t.length>0)for(var k=0;k<t.length;k++)for(var T=t[k],y=T.start,z=T.start+T.count;z>y;y+=3)K.pushTriangle(S[y],S[y+1],S[y+2]);else for(var y=0,z=S.length;z>y;y+=3)K.pushTriangle(S[y],S[y+1],S[y+2])}else for(var y=0,z=x.length/3;z>y;y+=3)K.pushTriangle(y,y+1,y+2)}else if(p instanceof THREE.Geometry){var U=p.vertices,V=p.faces,W=p.faceVertexUvs[0];F.getNormalMatrix(D);for(var X=o.material,Y=X instanceof THREE.MeshFaceMaterial,Z=Y===!0?o.material:null,$=0,_=U.length;_>$;$++){var aa=U[$];if(v.copy(aa),X.morphTargets===!0)for(var ba=p.morphTargets,ca=o.morphTargetInfluences,da=0,ea=ba.length;ea>da;da++){var fa=ca[da];if(0!==fa){var ga=ba[da],ha=ga.vertices[$];v.x+=(ha.x-aa.x)*fa,v.y+=(ha.y-aa.y)*fa,v.z+=(ha.z-aa.z)*fa}}K.pushVertex(v.x,v.y,v.z)}for(var ia=0,ja=V.length;ja>ia;ia++){var ka=V[ia];if(X=Y===!0?Z.materials[ka.materialIndex]:o.material,void 0!==X){var la=X.side,ma=g[ka.a],na=g[ka.b],oa=g[ka.c];if(K.checkTriangleVisibility(ma,na,oa)!==!1){var pa=K.checkBackfaceCulling(ma,na,oa);if(la!==THREE.DoubleSide){if(la===THREE.FrontSide&&pa===!1)continue;if(la===THREE.BackSide&&pa===!0)continue}i=N(),i.id=o.id,i.v1.copy(ma),i.v2.copy(na),i.v3.copy(oa),i.normalModel.copy(ka.normal),pa!==!1||la!==THREE.BackSide&&la!==THREE.DoubleSide||i.normalModel.negate(),i.normalModel.applyMatrix3(F).normalize();for(var qa=ka.vertexNormals,ra=0,sa=Math.min(qa.length,3);sa>ra;ra++){var ta=i.vertexNormalsModel[ra];ta.copy(qa[ra]),pa!==!1||la!==THREE.BackSide&&la!==THREE.DoubleSide||ta.negate(),ta.applyMatrix3(F).normalize()}i.vertexNormalsLength=qa.length;var ua=W[ia];if(void 0!==ua)for(var va=0;3>va;va++)i.uvs[va].copy(ua[va]);i.color=ka.color,i.material=X,i.z=(ma.positionScreen.z+na.positionScreen.z+oa.positionScreen.z)/3,i.renderOrder=o.renderOrder,u.elements.push(i)}}}}}else if(o instanceof THREE.Line){if(p instanceof THREE.BufferGeometry){var s=p.attributes;if(void 0!==s.position){for(var x=s.position.array,y=0,z=x.length;z>y;y+=3)K.pushVertex(x[y],x[y+1],x[y+2]);if(null!==p.index)for(var S=p.index.array,y=0,z=S.length;z>y;y+=2)K.pushLine(S[y],S[y+1]);else for(var wa=o instanceof THREE.LineSegments?2:1,y=0,z=x.length/3-1;z>y;y+=wa)K.pushLine(y,y+1)}}else if(p instanceof THREE.Geometry){E.multiplyMatrices(C,D);var U=o.geometry.vertices;if(0===U.length)continue;ma=M(),ma.positionScreen.copy(U[0]).applyMatrix4(E);for(var wa=o instanceof THREE.LineSegments?2:1,$=1,_=U.length;_>$;$++)ma=M(),ma.positionScreen.copy(U[$]).applyMatrix4(E),($+1)%wa>0||(na=g[f-2],H.copy(ma.positionScreen),I.copy(na.positionScreen),R(H,I)===!0&&(H.multiplyScalar(1/H.w),I.multiplyScalar(1/I.w),m=O(),m.id=o.id,m.v1.positionScreen.copy(H),m.v2.positionScreen.copy(I),m.z=Math.max(H.z,I.z),m.renderOrder=o.renderOrder,m.material=o.material,o.material.vertexColors===THREE.VertexColors&&(m.vertexColors[0].copy(o.geometry.colors[$]),m.vertexColors[1].copy(o.geometry.colors[$-1])),u.elements.push(m)))}}else if(o instanceof THREE.Sprite){w.set(D.elements[12],D.elements[13],D.elements[14],1),w.applyMatrix4(C);var xa=1/w.w;w.z*=xa,w.z>=-1&&w.z<=1&&(q=P(),q.id=o.id,q.x=w.x*xa,q.y=w.y*xa,q.z=w.z,q.renderOrder=o.renderOrder,q.object=o,q.rotation=o.rotation,q.scale.x=o.scale.x*Math.abs(q.x-(w.x+d.projectionMatrix.elements[0])/(w.w+d.projectionMatrix.elements[12])),q.scale.y=o.scale.y*Math.abs(q.y-(w.y+d.projectionMatrix.elements[5])/(w.w+d.projectionMatrix.elements[13])),q.material=o.material,u.elements.push(q))}}return h===!0&&u.elements.sort(Q),u}};
