# import math 
# # import를 하여 가져와야 사용 할 수 있다는것을 알게 되었다.

# def exampleOne(a):
#   if(int(a) == a):
#     if(a - math.trunc(a) != 0):
#       raise ValueError("정수를 입력 해야 합니다.1")
#   else:
#       raise ValueError("정수를 입력 해야 합니다.2")
#   return a
 
# exampleOne(5)


# gpt 코딩
import math

def exampleOne(a):
    if isinstance(a, (int, float)):
        #  if(int(a) == a): 이렇게 코딩을 작성 하여도 다른게 없었습니다.
        if math.trunc(a) != a:
      # 이 부분이 왜 이렇게 바뀌었는지 잘 모르겠습니다.
            raise ValueError("정수를 입력해야 합니다.1")
        else:
            raise ValueError("정수를 입력해야 합니다.2")
    return a

print(exampleOne(5)) # 정상 실행
print(exampleOne(5.0)) # ValueError 예외 발생
print(exampleOne("5")) # TypeError 예외 발생
