#리스트 구성
from xml.dom.minidom import Element


x = list()
y = []

# Element 여러개를 구성할 때 사용한다. 숫자와 문자를 합쳐서 사용할 수도 있고, 합칠 수도 있다. 리스트에 있는 Element를 바꿀 수도 있다.

x = [1, 2, 3, 4]
x[3] = 10
print(x[0]) #x에 0번째 자리에 있는 자료를 보여달라는 것
print(x[3]) #x에 3번째 자리에 있는 자료를 보여달라는 것
#리스트 사이즈보다 더 큰 Element를 보려고 하면 에러가 뜨게 된다.

# list에서 자주 쓰는 function
num_elements = len(x)
print(num_elements)

# 정렬하는 function
x = [4,2,3,1]
y = sorted(x)
print (y)
#합을 나타내는 function
z = sum(x)
print (z)

#반복문을 활용
x = [4,2,3,1]
for n in x:
    print(n)

# 문자열을 넣었을 때
y = ["you", "there"]
for c in y:
    print(c) #c 안에 y를 하나씩 넣어서 출력하는 것이다.

# index function
x = [4,2,3,1]
y = ["you", "there", "hello"]
print(x.index(1)) #1이라는 것이 어디 x의 몇 번째에 위치하고 있는지
print(y.index("you")) #"you"이라는 것이 어디 y의 몇 번째에 위치하고 있는지
print("hello" in y) #"hello"가 y안에 있는지
print("bye" in y) #"bye"가 y 안에 있는지

if "hello" in y:
    print("hello가 있어요.")

if "hello" in x:
    print("hello가 있어요.") #아무것도 뜨지 않는다.